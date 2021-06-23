import { Injectable } from '@nestjs/common';
import { CreateBurgerIngredientDto } from './dto/create-burger-ingredient.dto';
import { UpdateBurgerIngredientDto } from './dto/update-burger-ingredient.dto';

@Injectable()
export class BurgerIngredientService {
  create(createBurgerIngredientDto: CreateBurgerIngredientDto) {
    return 'This action adds a new burgerIngredient';
  }

  findAll() {
    return `This action returns all burgerIngredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} burgerIngredient`;
  }

  update(id: number, updateBurgerIngredientDto: UpdateBurgerIngredientDto) {
    return `This action updates a #${id} burgerIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} burgerIngredient`;
  }
}
