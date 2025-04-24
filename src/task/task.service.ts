import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';

@Injectable()
export class TaskService {
  private tasks = [
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

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  create(dto: CreateTaskDto) {
    const { title } = dto;
    const newTask = {
      id: this.tasks.length + 1,
      title,
      isComplited: false,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
}
