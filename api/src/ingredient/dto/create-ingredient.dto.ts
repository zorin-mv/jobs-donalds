import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  @IsNotEmpty()
  calory: number;
  @ApiProperty()
  isAlergen: boolean;
}
