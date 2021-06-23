import { Injectable } from '@nestjs/common';
import { CreateOrderBurgerDto } from './dto/create-order-burger.dto';
import { UpdateOrderBurgerDto } from './dto/update-order-burger.dto';

@Injectable()
export class OrderBurgerService {
  create(createOrderBurgerDto: CreateOrderBurgerDto) {
    return 'This action adds a new orderBurger';
  }

  findAll() {
    return `This action returns all orderBurger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderBurger`;
  }

  update(id: number, updateOrderBurgerDto: UpdateOrderBurgerDto) {
    return `This action updates a #${id} orderBurger`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderBurger`;
  }
}
