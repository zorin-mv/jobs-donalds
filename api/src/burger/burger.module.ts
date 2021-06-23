import { Module } from '@nestjs/common';
import { BurgerService } from './burger.service';
import { BurgerController } from './burger.controller';

@Module({
  controllers: [BurgerController],
  providers: [BurgerService]
})
export class BurgerModule {}
