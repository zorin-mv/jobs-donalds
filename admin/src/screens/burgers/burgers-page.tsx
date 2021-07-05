import React from 'react';

import { FormWrapper } from '@components/form-wrapper';
import { List } from '@components/list';
import { PageWrapper } from '@styles/components';
import { BurgerForm } from './components/burger-form';
import { IngredientInBurgerForm } from './components/ingredient-in-burger-form';

import { useBurgerState } from './burger.state';

export const BurgersPage: React.FC = () => {
  const {
    ingredientsList,
    isBurgerFormActive,
    ingredientsInBurgerList,
    activeBurger,
    isShowModal,
    activeIngredientInBurger,
    isEditIngredient,
    burgersList,
    isEditForm,
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
  } = useBurgerState();

  return (
    <PageWrapper>
      <List
        onRemove={removeBurger}
        onClick={openCreateForm}
        onItemClick={onItemClick}
        title="Burgers"
        list={burgersList.map(({ name, image, price, id }) => ({
          title: name,
          digit: price,
          image,
          id,
        }))}
      />
      {isBurgerFormActive && (
        <FormWrapper onClick={closeForm}>
          <BurgerForm
            isEdit={isEditForm}
            onSubmit={addBurger}
            onUpdate={editIngredient}
            name={activeBurger?.name}
            description={activeBurger?.description}
            price={activeBurger?.price}
            image={activeBurger?.image}
            id={activeBurger?.id}
            list={ingredientsInBurgerList}
            onItemClick={editIngredientsInBurgerHandler}
            onAddIngredientClick={addIngredientsInBurgerHandler}
          />
        </FormWrapper>
      )}
      {isShowModal && (
        <IngredientInBurgerForm
          onCreate={addIngredientInBurger}
          onUpdate={editIngredientInBurger}
          isEdit={isEditIngredient}
          ingredientsList={ingredientsList}
          burgerId={activeBurger?.id}
          setIsActive={updateState}
          count={activeIngredientInBurger?.count}
          isCustom={activeIngredientInBurger?.isCustom}
          ingredientId={activeIngredientInBurger?.ingredient.id}
          id={activeIngredientInBurger?.id}
          handleDelete={removeIngredientInBurger}
        />
      )}
    </PageWrapper>
  );
};
