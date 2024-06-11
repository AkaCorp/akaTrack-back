import { Controller, Get } from '@nestjs/common';
import { TaskService } from 'src/task/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return ['t1', 't2'];
  }
}
