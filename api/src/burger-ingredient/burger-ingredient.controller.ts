import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BurgerIngredientService } from './burger-ingredient.service';
import { CreateBurgerIngredientDto } from './dto/create-burger-ingredient.dto';
import { QueryDto } from './dto/query.dto';
import { UpdateBurgerIngredientDto } from './dto/update-burger-ingredient.dto';

@Controller('burger-ingredient')
export class BurgerIngredientController {
  constructor(
    private readonly burgerIngredientService: BurgerIngredientService
  ) {}

  @Post()
  create(@Body() createBurgerIngredientDto: CreateBurgerIngredientDto) {
    return this.burgerIngredientService.createIngredientForBurger(
      createBurgerIngredientDto
    );
  }

  @Get()
  findAll(@Query() query: QueryDto) {
    return this.burgerIngredientService.getIngredientForBurgers(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burgerIngredientService.getIngredientForBurger(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBurgerIngredientDto: UpdateBurgerIngredientDto
  ) {
    return this.burgerIngredientService.updateIngredientForBurger(
      id,
      updateBurgerIngredientDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgerIngredientService.removeIngredientForBurger(id);
  }
}
