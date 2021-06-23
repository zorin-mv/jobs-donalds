import { Module } from '@nestjs/common';
import { BurgerIngredientService } from './burger-ingredient.service';
import { BurgerIngredientController } from './burger-ingredient.controller';

@Module({
  controllers: [BurgerIngredientController],
  providers: [BurgerIngredientService]
})
export class BurgerIngredientModule {}
