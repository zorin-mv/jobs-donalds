import {
    Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BurgerEntity } from 'src/burger/entities/burger.entity';
import { BurgerService } from './burger.service';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { UpdateBurgerDto } from './dto/update-burger.dto';

@ApiTags('Burgers')
@Controller('burger')
export class BurgerController {
  constructor(private readonly burgerService: BurgerService) {}

  @ApiOperation({ summary: 'Create Burger' })
  @ApiResponse({ status: HttpStatus.CREATED, type: BurgerEntity })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createBurgerDto: CreateBurgerDto) {
    return this.burgerService.createBurger(createBurgerDto);
  }

  @ApiOperation({ summary: 'Geting all Burgers' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: BurgerEntity,
    isArray: true,
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.burgerService.getBurgers();
  }

  @ApiOperation({ summary: 'Geting one Burger' })
  @ApiResponse({ status: HttpStatus.OK, type: BurgerEntity })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.burgerService.getBurger(id);
  }

  @ApiOperation({ summary: 'Updating Burger' })
  @ApiResponse({ status: HttpStatus.OK, type: BurgerEntity })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBurgerDto: UpdateBurgerDto) {
    return this.burgerService.updateBurger(id, updateBurgerDto);
  }

  @ApiOperation({ summary: 'Deleting Burger' })
  @ApiResponse({ status: HttpStatus.OK, type: BurgerEntity })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.burgerService.removeBurger(id);
  }
}
