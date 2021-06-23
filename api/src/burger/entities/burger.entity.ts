import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { OrderBurgerEntity } from 'src/order-burger/entities/order-burger.entity';
import { BurgerIngredientEntity } from '../../burger-ingredient/entities/burger-ingredient.entity';

@Entity('burger')
export class BurgerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  rating: number;

  @Column({ type: 'timestamp' })
  time_create: Date;

  @OneToMany((type) => OrderBurgerEntity, (data) => data.burger)
  orders: OrderBurgerEntity[];

  @OneToMany((type) => BurgerIngredientEntity, (data) => data.burger)
  ingredients: BurgerIngredientEntity[];
}
