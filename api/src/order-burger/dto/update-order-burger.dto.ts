import { PartialType } from '@nestjs/swagger';
import { CreateOrderBurgerDto } from './create-order-burger.dto';

export class UpdateOrderBurgerDto extends PartialType(CreateOrderBurgerDto) {}
