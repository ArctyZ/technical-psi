import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { GoogleService } from './auth/google.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } , secretOrPrivateKey: 'secret'}),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, GoogleService, JwtStrategy],
})
export class AppModule {}
