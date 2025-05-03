import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  title: string;

  @IsBoolean({ message: 'Статус должен быть булевым выражением' })
  isComplited: boolean;
}
