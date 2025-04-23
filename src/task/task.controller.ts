import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  findAll() {
    return [
      {
        id: 1,
        title: 'learnNestJs',
        isComplited: false,
      },
      {
        id: 2,
        title: 'BuildApi',
        isComplited: true,
      },
    ];
  }
}
