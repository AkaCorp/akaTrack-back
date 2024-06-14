import { Get, Injectable } from '@nestjs/common';
import { Projects } from '@prisma/client';
import prisma from 'src/db/prisma';

@Injectable()
export class ProjectsService {
  findAllByUserId(userId: string): Promise<Projects[]> {
    return prisma.projects.findMany({
      include: { UsersProjects: { include: { user: true } } },
    });
  }
}
