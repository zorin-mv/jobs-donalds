export interface IBurgerState {
  isBurgerFormActive: boolean;
  activeBurger: IBurger | null;
  isShowModal: boolean;
  isEditForm: boolean;
  isEditIngredient: boolean;
  burgersList: IBurger[];
  ingredientsInBurgerList: IIngredientInBurger[];
  activeIngredientInBurger: IIngredientInBurger | null;
  ingredientsList: IIngredient[];
}
