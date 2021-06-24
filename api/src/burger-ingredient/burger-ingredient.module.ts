import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurgerIngredientEntity } from 'src/burger-ingredient/entities/burger-ingredient.entity';
import { BurgerModule } from 'src/burger/burger.module';
import { IngredientModule } from 'src/ingredient/ingredient.module';
import { BurgerIngredientController } from './burger-ingredient.controller';
import { BurgerIngredientService } from './burger-ingredient.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BurgerIngredientEntity]),
    BurgerModule,
    IngredientModule,
  ],
  controllers: [BurgerIngredientController],
  providers: [BurgerIngredientService],
})
export class BurgerIngredientModule {}
