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

  async createBurger(createBurgerDto: CreateBurgerDto): Promise<BurgerEntity> {
    try {
      return await this.BurgerRepository.save(createBurgerDto);
    } catch {
      throw new HttpException('Can not save Burger', HttpStatus.BAD_REQUEST);
    }
  }

  async getBurgers(): Promise<BurgerEntity[]> {
    return this.BurgerRepository.find();
  }

  async getBurger(id: string): Promise<BurgerEntity> {
    const burger = await this.BurgerRepository.findOne(id);

    if (!burger) {
      throw new HttpException(
        'Burger with this id does not exist',
        HttpStatus.NOT_FOUND
      );
    }

    return burger;
  }

  async updateBurger(
    id: string,
    updateBurgerDto: UpdateBurgerDto
  ): Promise<BurgerEntity> {
    await this.BurgerRepository.update(id, updateBurgerDto);
    return this.getBurger(id);
  }

  async removeBurger(id: string): Promise<BurgerEntity> {
    const removed = await this.getBurger(id);
    await this.BurgerRepository.delete(id);
    return removed;
  }
}
