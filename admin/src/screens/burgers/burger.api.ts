import { END_POINTS, QUERY_PARAM } from '@constants/api';
import { DELETE, GET, POST, UPDATE } from '@services/api';

export const createBurger = (data: ICreateBurger) =>
  POST<IBurger, ICreateBurger>(END_POINTS.burgers, data);

export const getBurgers = () => GET<IBurger[]>(END_POINTS.burgers);

export const deleteBurger = (id: string) =>
  DELETE<IBurger>(`${END_POINTS.burgers}/${id}`);

export const updateBurger = (id: string, data: ICreateBurger) =>
  UPDATE<IBurger, ICreateBurger>(`${END_POINTS.burgers}/${id}`, data);

export const createIngredientInBurger = (data: ICreateIngredientInBurger) =>
  POST<IIngredientInBurger, ICreateIngredientInBurger>(
    END_POINTS.ingredientInBurger,
    data
  );

export const getIngredientsInBurgers = () =>
  GET<IIngredientInBurger[]>(END_POINTS.ingredientInBurger);

export const getIngredientsInBurger = (burgerId: string) =>
  GET<IIngredientInBurger[], { [key: string]: string }>(
    END_POINTS.ingredientInBurger,
    {
      [QUERY_PARAM.burger]: burgerId,
    }
  );

export const deleteIngredientInBurger = (id: string) =>
  DELETE<IIngredientInBurger>(`${END_POINTS.ingredientInBurger}/${id}`);

export const updateIngredientInBurger = (
  id: string,
  data: IUpdateIngredientInBurger
) =>
  UPDATE<IIngredientInBurger, IUpdateIngredientInBurger>(
    `${END_POINTS.ingredientInBurger}/${id}`,
    data
  );
