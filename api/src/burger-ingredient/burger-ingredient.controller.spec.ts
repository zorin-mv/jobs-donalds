import { Test, TestingModule } from '@nestjs/testing';
import { BurgerIngredientController } from './burger-ingredient.controller';
import { BurgerIngredientService } from './burger-ingredient.service';

describe('BurgerIngredientController', () => {
  let controller: BurgerIngredientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurgerIngredientController],
      providers: [BurgerIngredientService],
    }).compile();

    controller = module.get<BurgerIngredientController>(BurgerIngredientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
