import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderBurgerService } from './order-burger.service';
import { CreateOrderBurgerDto } from './dto/create-order-burger.dto';
import { UpdateOrderBurgerDto } from './dto/update-order-burger.dto';

@Controller('order-burger')
export class OrderBurgerController {
  constructor(private readonly orderBurgerService: OrderBurgerService) {}

  @Post()
  create(@Body() createOrderBurgerDto: CreateOrderBurgerDto) {
    return this.orderBurgerService.create(createOrderBurgerDto);
  }

  @Get()
  findAll() {
    return this.orderBurgerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderBurgerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderBurgerDto: UpdateOrderBurgerDto) {
    return this.orderBurgerService.update(+id, updateOrderBurgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderBurgerService.remove(+id);
  }
}
