import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    return this.orderRepository.save(createOrderDto);
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.orderRepository.find();
  }

  async findOne(id: string): Promise<OrderEntity> {
    return this.orderRepository.findOne(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    await this.orderRepository.update(id, { ...updateOrderDto });
    return this.orderRepository.findOne(id);
  }

  async remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
