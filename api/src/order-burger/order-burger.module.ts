import { Module } from '@nestjs/common';
import { OrderBurgerService } from './order-burger.service';
import { OrderBurgerController } from './order-burger.controller';

@Module({
  controllers: [OrderBurgerController],
  providers: [OrderBurgerService]
})
export class OrderBurgerModule {}
