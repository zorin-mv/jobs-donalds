export interface ITextFieldStylesProps {
  error?: string;
  width?: string;
  height?: string;
  isFullWidth?: boolean;
  disabled?: boolean;
  value: string;
  placeholder?: string;
}

export interface ITextFieldProps extends ITextFieldStylesProps {
  type: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}
