import { Test, TestingModule } from '@nestjs/testing';
import { OrderBurgerService } from './order-burger.service';

describe('OrderBurgerService', () => {
  let service: OrderBurgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderBurgerService],
    }).compile();

    service = module.get<OrderBurgerService>(OrderBurgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
