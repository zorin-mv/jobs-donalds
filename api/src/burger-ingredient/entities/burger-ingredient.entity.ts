import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { BurgerEntity } from 'src/burger/entities/burger.entity';
import { IngredientEntity } from '../../ingredient/entities/ingredient.entity';

@Entity('burger_ingredient')
export class BurgerIngredientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @Column()
  isCustom: boolean;

  @ManyToOne((type) => BurgerEntity, (data) => data.ingredients)
  burger: BurgerEntity;

  @ManyToOne((type) => IngredientEntity, (data) => data.burgers)
  ingredient: IngredientEntity;
}
