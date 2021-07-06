export type TButtonTypes = 'primary' | 'secondary' | 'outlined' | 'default';

export interface IButtonStylesProps {
  variant: TButtonTypes;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}

export interface IButtonProps extends Partial<IButtonStylesProps> {
  title: string;
  onPress(): void;
}
