import { PartialType } from '@nestjs/swagger';
import { CreateBurgerIngredientDto } from './create-burger-ingredient.dto';

export class UpdateBurgerIngredientDto extends PartialType(CreateBurgerIngredientDto) {}
