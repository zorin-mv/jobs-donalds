import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { BurgerIngredientEntity } from 'src/burger-ingredient/entities/burger-ingredient.entity';

@Entity('ingredient')
export class IngredientEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: '48b80b4c-4b78-4796-a043-6bbac2c80787' })
  id: string;

  @Column({ unique: true })
  @ApiProperty({ example: 'cheese' })
  name: string;

  @Column()
  @ApiProperty({ example: 'data:image/png;base64' })
  image: string;

  @Column()
  @ApiProperty({ example: 265 })
  calory: number;

  @Column({ default: false })
  @ApiProperty({ example: 'true' })
  isAlergen: boolean;

  @OneToMany((type) => BurgerIngredientEntity, (data) => data.ingredient)
  burgers: BurgerIngredientEntity[];
}
