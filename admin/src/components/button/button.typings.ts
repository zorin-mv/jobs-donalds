export type TButtonTypes = 'primary' | 'secondary' | 'outlined' | 'default';

export interface IButtonStylesProps {
  variant?: TButtonTypes;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}

export interface IButtonProps extends IButtonStylesProps {
  title: string;
  onClick(): void;
}