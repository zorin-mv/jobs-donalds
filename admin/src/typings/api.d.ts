interface ICreateBurger {
  name: string;
  description: string;
  image: string;
  price: number;
}

interface IBurger extends ICreateBurger {
  id: string;
  time_create: Date;
  rating: number;
}

interface ICreateIngredient {
  name: string;
  image: string;
  calory: number;
  isAlergen: boolean;
}

interface IIngredient extends ICreateIngredient {
  id: string;
}

interface IUpdateIngredientInBurger {
  count: number | string;
  isCustom: boolean;
}

interface ICreateIngredientInBurger extends IUpdateIngredientInBurger {
  ingredientId: string;
  burgerId: string;
}

interface IIngredientInBurger extends ICreateIngredientInBurger {
  id: string;
  ingredient: IIngredient;
}
