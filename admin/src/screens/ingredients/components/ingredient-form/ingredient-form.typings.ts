import { FormikHelpers } from 'formik';
import * as yup from 'yup';

export interface IIngredientValues {
  name: string;
  image: string;
  isAlergen: boolean;
  calory: number | string;
}

export interface IIngredientFormProps extends Partial<IIngredientValues> {
  onSubmit(
    values: IIngredientValues,
    { resetForm }: FormikHelpers<IIngredientValues>
  ): void;
  onUpdate(id: string, body: ICreateIngredient): Promise<IIngredient>;
  isEdit: boolean;
  id?: string;
}

export const IngredientFormSchema = yup.object().shape({
  name: yup.string().required('This field cannot be empty'),
  calory: yup
    .number()
    .moreThan(0)
    .typeError('Should be a number')
    .required('This field cannot be empty'),
});
