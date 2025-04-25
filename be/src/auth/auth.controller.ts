import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const user = req.user;

    const payload = {
      id: user.id,
      username: user.username,
    };

    const jwt = this.jwtService.sign(payload);

    res.cookie('auth_token', jwt, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });

    res.redirect('http://localhost:3000/Q2/protected');
  }

  @Get('validate')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req) {
    return {user: req.user};
  }
}
