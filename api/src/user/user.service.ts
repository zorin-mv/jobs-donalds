import { Repository } from 'typeorm';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (user) {
      throw new HttpException('User is already exist', HttpStatus.BAD_REQUEST);
    }

    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    await this.userRepository.update(id, { ...updateUserDto });
    return this.userRepository.findOne(id);
  }

  async remove(id: string): Promise<UserEntity> {
    const removed = this.userRepository.findOne(id);
    await this.userRepository.delete(id);
    return removed;
  }
}
