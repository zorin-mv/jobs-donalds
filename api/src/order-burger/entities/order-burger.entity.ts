import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OrderEntity } from 'src/order/entities/order.entity';
import { BurgerEntity } from '../../burger/entities/burger.entity';

@Entity('order_burger')
export class OrderBurgerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @ManyToOne((type) => BurgerEntity, (data) => data.orders)
  burger: BurgerEntity;

  @ManyToOne((type) => OrderEntity, (data) => data.burgers)
  order: OrderEntity;
}
