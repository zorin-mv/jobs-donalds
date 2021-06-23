import { Test, TestingModule } from '@nestjs/testing';
import { BurgerController } from './burger.controller';
import { BurgerService } from './burger.service';

describe('BurgerController', () => {
  let controller: BurgerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurgerController],
      providers: [BurgerService],
    }).compile();

    controller = module.get<BurgerController>(BurgerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
