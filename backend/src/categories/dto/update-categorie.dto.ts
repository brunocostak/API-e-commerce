import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateCategorieDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
