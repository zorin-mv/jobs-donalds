import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { BurgerIngredientEntity } from 'src/burger-ingredient/entities/burger-ingredient.entity';

@Entity('ingredient')
export class IngredientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  calory: number;

  @Column()
  isAlergen: boolean;

  @OneToMany((type) => BurgerIngredientEntity, (data) => data.ingredient)
  burgers: BurgerIngredientEntity[];
}
