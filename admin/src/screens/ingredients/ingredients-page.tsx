import { AxiosResponse } from 'axios';
import { FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { FormWrapper } from '@components/form-wrapper';
import { List } from '@components/list';
import { PageWrapper } from '@styles/components';
import { IngredientForm } from './components/ingredient-form';

import {
    createIngredient, deleteIngredient, getIngredients, updateIngredient
} from './ingredient.api';

import { PROMISES_AREA } from '@constants/promises-area';

import { IIngredientValues } from './components/ingredient-form/ingredient-form.typings';

export const IngredientsPage: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [activeIng, setActiveIng] = useState<IIngredient | null>(null);
  const [ingredientsList, setIngredientsList] = useState<IIngredient[]>([]);

  useEffect(() => {
    trackPromise(
      getIngredients().then((res: AxiosResponse<IIngredient[]>) => {
        const listSorted = res.data.sort((a, b) => (a.name < b.name ? -1 : 1));
        setIngredientsList(listSorted);
      }),
      PROMISES_AREA.getIngredients
    );
  }, []);

  const openCreateForm = () => {
    setActiveIng(null);
    setActive(true);
    setIsEdit(false);
  };

  const closeForm = () => {
    setActiveIng(null);
    setActive(false);
  };

  const addIngredient = async (
    values: IIngredientValues,
    { resetForm }: FormikHelpers<IIngredientValues>
  ) => {
    const { data } = await trackPromise(
      createIngredient({ ...values, calory: +values.calory }),
      PROMISES_AREA.addIngredient
    );

    const newList = [...ingredientsList];
    newList.push(data);
    setIngredientsList(newList);
    resetForm();
    closeForm();
  };

  const onItemClick = (id: string) => {
    setActiveIng(ingredientsList.find((i) => i.id === id) || null);
    setActive(true);
    setIsEdit(true);
  };

  const removeIngredient = async (id: string) => {
    const removed = await deleteIngredient(id);
    let newList = [...ingredientsList];
    newList = newList.filter((item) => item.id !== id);
    setIngredientsList(newList);
    closeForm();
    return removed;
  };

  const editIngredient = async (id: string, body: ICreateIngredient) => {
    const { data } = await updateIngredient(id, body);
    let newList = [...ingredientsList].map((item) => {
      if (item.id === data.id) {
        return data;
      }

      return item;
    });

    setIngredientsList(newList);
    return data;
  };

  return (
    <PageWrapper>
      <List
        onRemove={removeIngredient}
        onClick={openCreateForm}
        isActive={active}
        onItemClick={onItemClick}
        title="Ingredients"
        list={ingredientsList.map(({ name, image, calory, id }) => ({
          title: name,
          digit: calory,
          image,
          id,
        }))}
      />
      {active && (
        <FormWrapper onClick={closeForm}>
          <IngredientForm
            isEdit={isEdit}
            onSubmit={addIngredient}
            onUpdate={editIngredient}
            name={activeIng?.name}
            calory={activeIng?.calory}
            image={activeIng?.image}
            isAlergen={activeIng?.isAlergen}
            id={activeIng?.id}
          />
        </FormWrapper>
      )}
    </PageWrapper>
  );
};
