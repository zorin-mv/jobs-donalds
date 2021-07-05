import { END_POINTS } from '@constants/api';
import { DELETE, GET, POST, UPDATE } from '@services/api';

export const createIngredient = (data: ICreateIngredient) =>
  POST<IIngredient, ICreateIngredient>(END_POINTS.ingredients, data);

export const getIngredients = () => GET<IIngredient[]>(END_POINTS.ingredients);

export const getIngredient = (id: string) =>
  GET<IIngredient>(`${END_POINTS.ingredients}/${id}`);

export const deleteIngredient = (id: string) =>
  DELETE<IIngredient>(`${END_POINTS.ingredients}/${id}`);

export const updateIngredient = (id: string, data: ICreateIngredient) =>
  UPDATE<IIngredient, ICreateIngredient>(
    `${END_POINTS.ingredients}/${id}`,
    data
  );
