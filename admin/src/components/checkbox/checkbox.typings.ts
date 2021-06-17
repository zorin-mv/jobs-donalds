export interface ICheckBoxStyledProps {
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

export interface ICheckBoxProps {
  title: string;
  onChange(): void;
  isChecked?: boolean;
  isDisabled?: boolean;
  color?: string;
}
