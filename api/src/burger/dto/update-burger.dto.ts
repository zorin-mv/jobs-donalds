import { PartialType } from '@nestjs/swagger';
import { CreateBurgerDto } from './create-burger.dto';

export class UpdateBurgerDto extends PartialType(CreateBurgerDto) {}
