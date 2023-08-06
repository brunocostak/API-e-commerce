import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
