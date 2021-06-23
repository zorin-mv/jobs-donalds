import {
    Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn
} from 'typeorm';

import { OrderBurgerEntity } from 'src/order-burger/entities/order-burger.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  time_create: Date;

  @Column({ type: 'timestamp' })
  time_delivery: Date;

  @Column()
  location_x: string;

  @Column()
  location_y: string;

  @ManyToOne((type) => UserEntity, (data) => data.orders)
  user: UserEntity;

  @OneToMany((type) => OrderBurgerEntity, (data) => data.order)
  burgers: OrderBurgerEntity[];
}
