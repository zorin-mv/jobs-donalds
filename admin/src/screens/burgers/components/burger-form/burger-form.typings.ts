import { FormikHelpers } from 'formik';
import * as yup from 'yup';

export interface IBurgerValues {
  name: string;
  image: string;
  price: number | string;
  description: string;
}

export interface IBurgerFormProps extends Partial<IBurgerValues> {
  onSubmit(
    values: IBurgerValues,
    { resetForm }: FormikHelpers<IBurgerValues>
  ): void;
  onUpdate(id: string, body: ICreateBurger): Promise<IBurger>;
  isEdit: boolean;
  id?: string;
  list: IIngredientInBurger[];
  onItemClick(id: string): void;
  onAddIngredientClick(): void;
}

export const BurgerFormSchema = yup.object().shape({
  name: yup.string().required('This field cannot be empty'),
  description: yup.string().required('This field cannot be empty'),
  price: yup
    .number()
    .moreThan(0)
    .typeError('Should be a number')
    .required('This field cannot be empty'),
});
