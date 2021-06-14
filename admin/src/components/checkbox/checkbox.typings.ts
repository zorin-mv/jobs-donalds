export interface ICheckBoxStyledProps {
  checked?: boolean;
  disabled?: boolean;
}

export interface ICheckBoxProps {
  title: string;
  onChange(): void;
  isChecked?: boolean;
  isDisabled?: boolean;
}
