import {
    Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Getting all users' })
  @ApiResponse({ status: HttpStatus.OK, type: [UserEntity] })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Getting one user' })
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Updating user' })
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Deleting user' })
  @ApiResponse({ status: HttpStatus.OK, type: UserEntity })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
