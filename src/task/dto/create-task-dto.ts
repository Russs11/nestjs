import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty()
  title: string;
}
