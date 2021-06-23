import { type } from 'os';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { OrderEntity } from '../../order/entities/order.entity';

import { Gender } from '../user-types';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column({ type: 'enum', enum: Gender })
  @ApiProperty()
  gender: Gender;

  @Column()
  @ApiProperty()
  image: string;

  @OneToMany((type) => OrderEntity, (data) => data.user)
  orders: OrderEntity[];
}
