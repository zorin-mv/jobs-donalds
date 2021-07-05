import { AxiosResponse } from 'axios';

export interface IListProps {
  onClick(): void;
  onItemClick: (id: string) => void;
  list: IListItem[];
  title: string;
  onRemove(id: string): Promise<AxiosResponse<IIngredient | IBurger>>;
}

interface IListItem {
  id: string;
  title: string;
  digit: number;
  image: string;
}
