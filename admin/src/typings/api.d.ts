interface IBurger {
  id?: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  time_create: Date;
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
