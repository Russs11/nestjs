import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty()
  @Length(2, 40, { message: 'На звание должно быть от 2 до 40 символов' })
  title: string;
}
