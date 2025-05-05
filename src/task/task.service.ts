import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'learnNestJs',
      isComplited: false,
      desription: '',
    },
    {
      id: 2,
      title: 'BuildApi',
      isComplited: true,
      description: '',
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
    const { title, description } = dto;
    const newTask = {
      id: this.tasks.length + 1,
      title,
      description,
      isComplited: false,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, isComplited, description } = dto;
    const task = this.findById(id);

    task.title = title;
    task.isComplited = isComplited;
    task.description = description;

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);

    Object.assign(task, dto);
    return task;
  }

  delete(id: number) {
    const task = this.findById(id);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    return `task with id ${id} deleted`;
  }
}
