import React from 'react';

import { FormWrapper } from '@components/form-wrapper';
import { List } from '@components/list';
import { PageWrapper } from '@styles/components';
import { IngredientForm } from './components/ingredient-form';

import { useIngredientsState } from './ingredients.state';

export const IngredientsPage: React.FC = () => {
  const {
    removeIngredient,
    openCreateForm,
    onItemClick,
    ingredientsList,
    isActiveFormIngredient,
    closeForm,
    isEdit,
    addIngredient,
    editIngredient,
    activeIng,
  } = useIngredientsState();
  return (
    <PageWrapper>
      <List
        onRemove={removeIngredient}
        onClick={openCreateForm}
        onItemClick={onItemClick}
        title="Ingredients"
        list={ingredientsList.map(({ name, image, calory, id }) => ({
          title: name,
          digit: calory,
          image,
          id,
        }))}
      />
      {isActiveFormIngredient && (
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
