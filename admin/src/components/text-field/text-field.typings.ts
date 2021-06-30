

export interface ITextFieldStylesProps {
  error?: string;
  width?: string;
  height?: string;
  isFullWidth?: boolean;
  disabled?: boolean;
  value: string | number;
  placeholder?: string;
}

export interface ITextFieldProps extends ITextFieldStylesProps {
  type: string;
  name: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
  onBlur(e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}
