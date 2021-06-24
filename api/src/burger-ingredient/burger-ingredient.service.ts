import { Repository } from 'typeorm';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BurgerIngredientEntity } from 'src/burger-ingredient/entities/burger-ingredient.entity';
import { BurgerService } from 'src/burger/burger.service';
import { IngredientService } from 'src/ingredient/ingredient.service';
import { CreateBurgerIngredientDto } from './dto/create-burger-ingredient.dto';
import { QueryDto } from './dto/query.dto';
import { UpdateBurgerIngredientDto } from './dto/update-burger-ingredient.dto';

@Injectable()
export class BurgerIngredientService {
  constructor(
    @InjectRepository(BurgerIngredientEntity)
    private readonly burgerIngredientRepository: Repository<BurgerIngredientEntity>,
    private burgerService: BurgerService,
    private ingredientService: IngredientService
  ) {}

  async createIngredientForBurger({
    isCustom,
    count,
    burgerId,
    ingredientId,
  }: CreateBurgerIngredientDto) {
    await this.burgerService.getBurger(burgerId);
    await this.ingredientService.getIngredient(ingredientId);

    const ingredientInCurrentBurger =
      await this.burgerIngredientRepository.findOne({
        where: {
          ingredient: {
            id: ingredientId,
          },
        },
      });

    if (ingredientInCurrentBurger) {
      throw new HttpException(
        'Ingredient in current burger already exists',
        HttpStatus.BAD_REQUEST
      );
    }

    await this.burgerIngredientRepository.save({
      isCustom,
      count,
      burger: await this.burgerService.getBurger(burgerId),
      ingredient: await this.ingredientService.getIngredient(ingredientId),
    });
  }

  async getIngredientForBurgers({ burgerId, ingredientId }: QueryDto) {
    if (burgerId) {
      return this.relationsSearch(burgerId, 'burger', 'ingredient');
    }

    if (ingredientId) {
      return this.relationsSearch(ingredientId, 'ingredient', 'burger');
    }

    return this.burgerIngredientRepository.find();
  }

  async getIngredientForBurger(id: string) {
    return this.burgerIngredientRepository.findOne(id);
  }

  async updateIngredientForBurger(
    id: string,
    updateBurgerIngredientDto: UpdateBurgerIngredientDto
  ) {
    await this.burgerIngredientRepository.update(id, updateBurgerIngredientDto);
    return this.getIngredientForBurger(id);
  }

  async removeIngredientForBurger(id: string) {
    const removed = await this.getIngredientForBurger(id);
    await this.burgerIngredientRepository.delete(id);
    return removed;
  }

  private async relationsSearch(id: string, column: string, relation: string) {
    const ingredients = await this.burgerIngredientRepository.find({
      where: {
        [column]: id,
      },
    });

    const arrIngredients = ingredients.map(({ id }) =>
      this.burgerIngredientRepository.findOne({
        where: {
          id,
        },
        relations: [relation],
      })
    );

    return Promise.all(arrIngredients);
  }
}
