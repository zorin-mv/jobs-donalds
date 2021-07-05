import { FormikHelpers } from 'formik';
import { useCallback, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { useUpdateState } from '../../services/hooks/useUpdateState';

import {
    createIngredient, deleteIngredient, getIngredients, updateIngredient
} from './ingredient.api';

import { PROMISES_AREA } from '@constants/promises-area';

import { IIngredientValues } from './components/ingredient-form/ingredient-form.typings';
import { IIngredientState } from './ingredients.typings';

const initialState: IIngredientState = {
  isActiveFormIngredient: false,
  isEdit: false,
  activeIng: null,
  ingredientsList: [],
};

export const useIngredientsState = () => {
  const { state, updateState } = useUpdateState(initialState);

  const fetchIngredientsList = useCallback(async () => {
    const res = await trackPromise(getIngredients(), PROMISES_AREA.getList);
    const listSorted = res.data.sort((a, b) => (a.name < b.name ? -1 : 1));
    updateState({
      ingredientsList: listSorted,
    });
  }, []);

  useEffect(() => {
    fetchIngredientsList();
  }, [fetchIngredientsList]);

  const openCreateForm = () => {
    updateState({
      activeIng: null,
      isActiveFormIngredient: true,
      isEdit: false,
    });
  };

  const closeForm = () => {
    updateState({
      activeIng: null,
      isActiveFormIngredient: false,
    });
  };

  const addIngredient = async (
    values: IIngredientValues,
    { resetForm }: FormikHelpers<IIngredientValues>
  ) => {
    const { data } = await trackPromise(
      createIngredient({ ...values, calory: +values.calory }),
      PROMISES_AREA.addIngredient
    );

    const newList = [...state.ingredientsList, data];
    updateState({
      ingredientsList: newList,
    });
    resetForm();
    closeForm();
  };

  const onItemClick = (id: string) => {
    updateState({
      activeIng: state.ingredientsList.find((i) => i.id === id) || null,
      isEdit: true,
      isActiveFormIngredient: true,
    });
  };

  const removeIngredient = async (id: string) => {
    const removed = await deleteIngredient(id);
    const filteredList = state.ingredientsList.filter((item) => item.id !== id);
    updateState({ ingredientsList: filteredList });
    closeForm();
    return removed;
  };

  const editIngredient = async (id: string, body: ICreateIngredient) => {
    const { data } = await updateIngredient(id, body);
    const newList = state.ingredientsList.map((item) => {
      if (item.id === data.id) {
        return data;
      }

      return item;
    });

    updateState({ ingredientsList: newList });
    return data;
  };

  return {
    ...state,
    updateState,
    removeIngredient,
    openCreateForm,
    onItemClick,
    closeForm,
    addIngredient,
    editIngredient,
  };
};
