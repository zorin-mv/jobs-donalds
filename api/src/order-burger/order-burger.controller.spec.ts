import { Test, TestingModule } from '@nestjs/testing';
import { OrderBurgerController } from './order-burger.controller';
import { OrderBurgerService } from './order-burger.service';

describe('OrderBurgerController', () => {
  let controller: OrderBurgerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderBurgerController],
      providers: [OrderBurgerService],
    }).compile();

    controller = module.get<OrderBurgerController>(OrderBurgerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
