import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurgerEntity } from 'src/burger/entities/burger.entity';
import { BurgerController } from './burger.controller';
import { BurgerService } from './burger.service';

@Module({
  imports: [TypeOrmModule.forFeature([BurgerEntity])],
  controllers: [BurgerController],
  providers: [BurgerService],
  exports: [BurgerService],
})
export class BurgerModule {}
