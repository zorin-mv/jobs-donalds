export interface ICheckBoxStyledProps {
  checked?: boolean;
  disabled?: boolean;
  color?: string;
}

export interface ICheckBoxProps {
  title: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  isChecked?: boolean;
  isDisabled?: boolean;
  color?: string;
  name: string;
}
