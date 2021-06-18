import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Gender {
  male = 'male',
  female = 'female',
}

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Gender })
  gender: string;

  @Column()
  image: string;
}
