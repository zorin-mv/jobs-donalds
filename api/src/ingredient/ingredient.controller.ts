import {
    Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { IngredientEntity } from './entities/ingredient.entity';
import { IngredientService } from './ingredient.service';

@ApiTags('Ingredients')
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @ApiOperation({ summary: 'Create ingredient' })
  @ApiResponse({ status: HttpStatus.CREATED, type: IngredientEntity })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientService.createIngredient(createIngredientDto);
  }

  @ApiOperation({ summary: 'Geting all ingredients' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IngredientEntity,
    isArray: true,
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.ingredientService.getIngredients();
  }

  @ApiOperation({ summary: 'Geting one ingredient' })
  @ApiResponse({ status: HttpStatus.OK, type: IngredientEntity })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.getIngredient(id);
  }

  @ApiOperation({ summary: 'Updating ingredient' })
  @ApiResponse({ status: HttpStatus.OK, type: IngredientEntity })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  @ApiBody({ type: UpdateIngredientDto })
  update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto
  ) {
    return this.ingredientService.updateIngredient(id, updateIngredientDto);
  }

  @ApiOperation({ summary: 'Deleting ingredient' })
  @ApiResponse({ status: HttpStatus.OK, type: IngredientEntity })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.removeIngredient(id);
  }
}
