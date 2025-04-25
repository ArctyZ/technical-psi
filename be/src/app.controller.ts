/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { UserRandom, UserType } from 'types/user';
import axios from 'axios';

type DataType = { voucher: number; price: number };

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  async getUser(@Req() request: Request): Promise<UserType[]> {
    const filter = request.body as { results: number; page: number };
    try {
      const res = await axios.get(
        `https://randomuser.me/api?results=${filter.results}&page=${filter.page}&inc=name,location,email,phone,cell,picture,dob`,
      );

      const results: UserType[] = res.data.results.map((user: UserRandom) => {
        return {
          name: `${user.name.title}.${user.name.first} ${user.name.last}`,
          location: `${user.location.street.number}, ${user.location.street.name} , ${user.location.city}, ${user.location.state}, ${user.location.country}`,
          email: user.email,
          phone: user.phone,
          cell: user.cell,
          picture: [
            user.picture.large,
            user.picture.medium,
            user.picture.thumbnail,
          ],
          age: user.dob.age,
        };
      });

      return results;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Post('checkout')
  create(@Req() request: Request): any {
    const data: DataType = request.body as DataType;

    const result = data.price - (data.price * data.voucher) / 100;
    const point = (data.voucher * 2) / 100;

    return { message: 'Checkout success!', data: { result, point } };
  }
}
