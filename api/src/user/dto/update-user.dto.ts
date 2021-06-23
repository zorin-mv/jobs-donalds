import { IsEmail } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  password: string;
}
