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

  async create(
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

  async findAll(): Promise<IngredientEntity[]> {
    return this.ingredientRepository.find();
  }

  async findOne(id: string): Promise<IngredientEntity> {
    return this.ingredientRepository.findOne(id);
  }

  async update(
    id: string,
    updateIngredientDto: UpdateIngredientDto
  ): Promise<IngredientEntity> {
    await this.ingredientRepository.update(id, updateIngredientDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<IngredientEntity> {
    const removed = await this.findOne(id);
    await this.ingredientRepository.delete(id);
    return removed;
  }
}
