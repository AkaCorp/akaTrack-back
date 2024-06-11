import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import prisma from 'src/db/prisma';

@Injectable()
export class UsersService {
  getAll(): Promise<Partial<User>[]> {
    return prisma.user.findMany();
  }

  findOne(email: string): Promise<User> {
    return prisma.user.findUnique({
      select: {
        id: true,
        email: true,
        fistname: true,
        lastname: true,
        password: true,
      },
      where: {
        email,
      },
    });
  }
}
