import { END_POINTS } from '@constants/api';
import { POST } from '@services/api';

export interface IDataIngredient {
  name: string;
  image: string;
  calory: number;
  isAlergen: boolean;
}

export const createIngredient = async (data: IDataIngredient) => {
  return POST(END_POINTS.ingredients, data);
};
