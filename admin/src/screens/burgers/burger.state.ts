import { FormikHelpers } from 'formik';
import { useCallback, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getIngredients } from '@screens/ingredients/ingredient.api';
import { useUpdateState } from '@services/hooks/useUpdateState';
import {
    createBurger, createIngredientInBurger, deleteBurger, deleteIngredientInBurger, getBurgers,
    getIngredientsInBurger, updateBurger, updateIngredientInBurger
} from './burger.api';

import { PROMISES_AREA } from '@constants/promises-area';

import { IBurgerState } from './burgers.typings';
import { IBurgerValues } from './components/burger-form/burger-form.typings';

export const initialState: IBurgerState = {
  isBurgerFormActive: false,
  activeBurger: null,
  isShowModal: false,
  isEditForm: false,
  isEditIngredient: false,
  burgersList: [],
  ingredientsInBurgerList: [],
  activeIngredientInBurger: null,
  ingredientsList: [],
};

export const useBurgerState = () => {
  const { state, updateState } = useUpdateState(initialState);

  const editIngredientsInBurgerHandler = (id: string) => {
    updateState({
      isEditIngredient: true,
      isShowModal: true,
      activeIngredientInBurger:
        state.ingredientsInBurgerList.find((i) => i.id === id) || null,
    });
  };

  const addIngredientsInBurgerHandler = () => {
    updateState({
      isEditIngredient: false,
      isShowModal: true,
      activeIngredientInBurger: null,
    });
  };

  const fetchIngredientsList = useCallback(async () => {
    const res = await getIngredients();
    const listSorted = res.data.sort((a, b) => (a.name < b.name ? -1 : 1));

    updateState({
      ingredientsList: listSorted,
    });
  }, []);

  useEffect(() => {
    fetchIngredientsList();
  }, [fetchIngredientsList]);

  const fetchBurgerList = useCallback(async () => {
    const res = await trackPromise(getBurgers(), PROMISES_AREA.getList);
    const listSorted = res.data.sort((a, b) => (a.name < b.name ? -1 : 1));
    updateState({
      burgersList: listSorted,
    });
  }, []);

  useEffect(() => {
    fetchBurgerList();
  }, [fetchBurgerList]);

  const fetchIngredientsInBurgerList = useCallback(async () => {
    if (state.activeBurger) {
      const { data } = await trackPromise(
        getIngredientsInBurger(state.activeBurger.id),
        PROMISES_AREA.getIngredientsInBurgerList
      );
      updateState({
        ingredientsInBurgerList: data,
      });
    }
  }, [state.activeBurger]);

  useEffect(() => {
    if (state.isEditForm && state.isBurgerFormActive) {
      fetchIngredientsInBurgerList();
    }
  }, [
    fetchIngredientsList,
    fetchIngredientsInBurgerList,
    state.isEditForm,
    state.isBurgerFormActive,
  ]);

  const openCreateForm = () => {
    updateState({
      isEditForm: false,
      isBurgerFormActive: true,
      activeBurger: null,
    });
  };

  const closeForm = () => {
    updateState({
      isBurgerFormActive: false,
      activeBurger: null,
    });
  };

  const addBurger = async (
    values: IBurgerValues,
    { resetForm }: FormikHelpers<IBurgerValues>
  ) => {
    const { data } = await trackPromise(
      createBurger({ ...values, price: +values.price }),
      PROMISES_AREA.addBurger
    );

    const newList = [...state.burgersList];
    newList.push(data);

    updateState({
      burgersList: newList,
    });
    resetForm();
    closeForm();
  };

  const onItemClick = (id: string) => {
    updateState({
      activeBurger: state.burgersList.find((i) => i.id === id) || null,
      isBurgerFormActive: true,
      isEditForm: true,
    });
  };

  const removeBurger = async (id: string) => {
    const removed = await deleteBurger(id);
    const filteredList = state.burgersList.filter((item) => item.id !== id);

    updateState({
      burgersList: filteredList,
    });

    closeForm();
    return removed;
  };

  const editIngredient = async (id: string, body: ICreateBurger) => {
    const { data } = await updateBurger(id, body);
    const newList = state.burgersList.map((item) => {
      if (item.id === data.id) {
        return data;
      }

      return item;
    });

    updateState({
      burgersList: newList,
    });

    return data;
  };

  const addIngredientInBurger = async (body: ICreateIngredientInBurger) => {
    const { data } = await trackPromise(
      createIngredientInBurger(body),
      PROMISES_AREA.addIngredientInBurger
    );

    const newList = [...state.ingredientsInBurgerList, data];

    updateState({
      ingredientsInBurgerList: newList,
      isShowModal: false,
    });

    return data;
  };

  const editIngredientInBurger = async (
    id: string,
    body: IUpdateIngredientInBurger
  ) => {
    const { data } = await updateIngredientInBurger(id, body);

    const newList = state.ingredientsInBurgerList.map((item) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    });

    updateState({
      ingredientsInBurgerList: newList,
      isShowModal: false,
      isEditIngredient: false,
    });

    return data;
  };

  const removeIngredientInBurger = async (id: string) => {
    const { data } = await deleteIngredientInBurger(id);

    const filteredList = state.ingredientsInBurgerList.filter(
      (item) => item.id !== data.id
    );

    updateState({
      ingredientsInBurgerList: filteredList,
      isShowModal: false,
      isEditIngredient: false,
    });

    return data;
  };

  return {
    ...state,
    updateState,
    removeBurger,
    openCreateForm,
    addIngredientInBurger,
    addIngredientsInBurgerHandler,
    removeIngredientInBurger,
    editIngredientsInBurgerHandler,
    editIngredient,
    addBurger,
    editIngredientInBurger,
    onItemClick,
    closeForm,
  };
};
