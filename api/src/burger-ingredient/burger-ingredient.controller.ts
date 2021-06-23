import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BurgerIngredientService } from './burger-ingredient.service';
import { CreateBurgerIngredientDto } from './dto/create-burger-ingredient.dto';
import { UpdateBurgerIngredientDto } from './dto/update-burger-ingredient.dto';

@Controller('burger-ingredient')
export class BurgerIngredientController {
  constructor(private readonly burgerIngredientService: BurgerIngredientService) {}

  @Post()
  create(@Body() createBurgerIngredientDto: CreateBurgerIngredientDto) {
    return this.burgerIngredientService.create(createBurgerIngredientDto);
  }

  @Get()
  findAll() {
    return this.burgerIngredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burgerIngredientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBurgerIngredientDto: UpdateBurgerIngredientDto) {
    return this.burgerIngredientService.update(+id, updateBurgerIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgerIngredientService.remove(+id);
  }
}
