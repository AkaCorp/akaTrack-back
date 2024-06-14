import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from 'src/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get('')
  async getAllProjectsByUserId(@Request req) {
    return this.projectService.findAllByUserId(req.user.id);
  }
}
