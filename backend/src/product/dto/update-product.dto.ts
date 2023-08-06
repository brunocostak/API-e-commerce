import { IsNotEmpty, IsString, MaxLength, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsString()
  @MaxLength(400)
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  image?: string;

  @IsString()
  @IsNotEmpty()
  categorieName: string;
}
