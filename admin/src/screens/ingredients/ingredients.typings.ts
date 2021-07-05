export interface IIngredientState {
  isActiveFormIngredient: boolean;
  isEdit: boolean;
  activeIng: IIngredient | null;
  ingredientsList: IIngredient[];
}
