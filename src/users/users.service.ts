import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import prisma from 'src/db/prisma';

@Injectable()
export class UsersService {
  getAll(): Promise<Partial<Users>[]> {
    return prisma.users.findMany();
  }

  findOne(email: string): Promise<Users> {
    return prisma.users.findUnique({
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
        password: true,
        active: true,
      },
      where: {
        email,
      },
    });
  }
}
