import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty()
  @Length(2, 40, { message: 'На звание должно быть от 2 до 40 символов' })
  title: string;

  @IsBoolean({ message: 'Статус должен быть булевым выражением' })
  isComplited: boolean;
}
