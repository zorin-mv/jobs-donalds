import { Test, TestingModule } from '@nestjs/testing';
import { BurgerIngredientService } from './burger-ingredient.service';

describe('BurgerIngredientService', () => {
  let service: BurgerIngredientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BurgerIngredientService],
    }).compile();

    service = module.get<BurgerIngredientService>(BurgerIngredientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
