import { UserEntity } from 'src/user/entities/user.entity';

export class CreateOrderDto {
  timeCreate: Date;
  timeDelivery: Date;
  locationX: string;
  locationY: string;
  user: UserEntity;
}
