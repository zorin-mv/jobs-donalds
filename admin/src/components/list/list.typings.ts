import { AxiosResponse } from 'axios';

export interface IListProps {
  isActive: boolean;
  onClick(): void;
  onItemClick: (id: string) => void;
  list: IListItem[];
  title: string;
  onRemove(id: string): Promise<AxiosResponse<IIngredient>>;
}

interface IListItem {
  id: string;
  title: string;
  digit: number;
  image: string;
}
