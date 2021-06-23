import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { Gender } from '../user-types';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;
  @ApiProperty()
  @IsNotEmpty()
  lastName: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  image: string;
  @ApiProperty({ type: 'enum', enum: Gender })
  @IsNotEmpty()
  gender: Gender;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
