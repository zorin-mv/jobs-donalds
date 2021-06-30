import { FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { FormWrapper } from '@components/form-wrapper';
import { PageWrapper } from '@styles/components';
import { IngredientForm } from './components/ingredient-form';

import { createIngredient } from './components/ingredient-form/ingredient-form.api';

import { IIngredientValues } from './components/ingredient-form/ingredient-form.typings';

export const IngredientsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const addIngredient = async (
    values: IIngredientValues,
    { resetForm }: FormikHelpers<IIngredientValues>
  ) => {
    await trackPromise(
      createIngredient({ ...values, calory: +values.calory }),
      'add-ingredient'
    );
    resetForm();
    toggleActive();
  };

  return (
    <PageWrapper>
      <div
        onClick={toggleActive}
        style={{ width: active ? '65%' : '100%', transition: '0.3s' }}
      >
        Ingredients page is active
      </div>
      <FormWrapper isActive={active} onClick={toggleActive}>
        <IngredientForm onSubmit={addIngredient} />
      </FormWrapper>
    </PageWrapper>
  );
};
