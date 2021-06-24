import { Repository } from 'typeorm';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { IngredientEntity } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(IngredientEntity)
    private readonly ingredientRepository: Repository<IngredientEntity>
  ) {}

  async createIngredient(
    createIngredientDto: CreateIngredientDto
  ): Promise<IngredientEntity> {
    try {
      return await this.ingredientRepository.save(createIngredientDto);
    } catch {
      throw new HttpException(
        'Can not save ingredient',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async getIngredients(): Promise<IngredientEntity[]> {
    return this.ingredientRepository.find();
  }

  async getIngredient(id: string): Promise<IngredientEntity> {
    const ingredient = this.ingredientRepository.findOne(id);

    if (!ingredient) {
      throw new HttpException(
        'Burger with this id does not exist',
        HttpStatus.NOT_FOUND
      );
    }

    return ingredient;
  }

  async updateIngredient(
    id: string,
    updateIngredientDto: UpdateIngredientDto
  ): Promise<IngredientEntity> {
    await this.ingredientRepository.update(id, updateIngredientDto);
    return this.getIngredient(id);
  }

  async removeIngredient(id: string): Promise<IngredientEntity> {
    const removed = await this.getIngredient(id);
    await this.ingredientRepository.delete(id);
    return removed;
  }
}
