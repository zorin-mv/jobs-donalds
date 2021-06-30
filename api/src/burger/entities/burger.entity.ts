import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { OrderBurgerEntity } from 'src/order-burger/entities/order-burger.entity';
import { BurgerIngredientEntity } from '../../burger-ingredient/entities/burger-ingredient.entity';

@Entity('burger')
export class BurgerEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'bd4bc467-77a5-4ea9-975b-16d1eebef55d' })
  id: string;

  @Column({ unique: true })
  @ApiProperty({ example: 'hamburger' })
  name: string;

  @Column()
  @ApiProperty({
    example: 'A hamburger is a food, typically considered a sandwich.',
  })
  description: string;

  @Column()
  @ApiProperty({ example: 'data:image/png;base64' })
  image: string;

  @Column({ default: 0 })
  rating: number;

  @Column()
  price: number;

  @CreateDateColumn()
  time_create: Date;

  @OneToMany((type) => OrderBurgerEntity, (data) => data.burger)
  orders: OrderBurgerEntity[];

  @OneToMany((type) => BurgerIngredientEntity, (data) => data.burger)
  ingredients: BurgerIngredientEntity[];
}
