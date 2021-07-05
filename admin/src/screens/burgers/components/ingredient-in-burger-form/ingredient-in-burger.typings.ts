import * as yup from 'yup';

import { TUpdateStateData } from '@services/hooks/useUpdateState';

import { IBurgerState } from '@screens/burgers/burgers.typings';

export interface IIngredientInBurgerValues {
  isCustom: boolean;
  count: number | string;
  burgerId: string;
  ingredientId: string;
}

export interface IIngredientInBurgerFormProps
  extends Partial<IIngredientInBurgerValues> {
  onCreate(values: IIngredientInBurgerValues): void;
  onUpdate(
    id: string,
    body: IUpdateIngredientInBurger
  ): Promise<IIngredientInBurger>;
  isEdit: boolean;
  id?: string;
  ingredientsList?: IIngredient[];
  handleDelete(id: string): void;
  setIsActive(data: TUpdateStateData<IBurgerState>): void;
}

export const IngredientInBurgerFormSchema = yup.object().shape({
  count: yup
    .number()
    .moreThan(0)
    .typeError('Should be a number')
    .required('This field cannot be empty')
    .integer(),
});
