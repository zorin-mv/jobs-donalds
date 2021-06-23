import { Repository } from 'typeorm';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';
import { BurgerEntity } from './entities/burger.entity';

@Injectable()
export class BurgerService {
  constructor(
    @InjectRepository(BurgerEntity)
    private readonly BurgerRepository: Repository<BurgerEntity>
  ) {}

  async create(createBurgerDto: CreateBurgerDto): Promise<BurgerEntity> {
    try {
      return await this.BurgerRepository.save(createBurgerDto);
    } catch {
      throw new HttpException('Can not save Burger', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<BurgerEntity[]> {
    return this.BurgerRepository.find();
  }

  async findOne(id: string): Promise<BurgerEntity> {
    const burger = await this.BurgerRepository.findOne(id);

    if (!burger) {
      throw new HttpException(
        'Burger with this id does not exist',
        HttpStatus.NOT_FOUND
      );
    }

    return burger;
  }

  async update(
    id: string,
    updateBurgerDto: UpdateBurgerDto
  ): Promise<BurgerEntity> {
    await this.BurgerRepository.update(id, updateBurgerDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<BurgerEntity> {
    const removed = await this.findOne(id);
    await this.BurgerRepository.delete(id);
    return removed;
  }
}
