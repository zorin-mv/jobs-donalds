import { TextInputProps } from 'react-native';

export interface ITextFieldProps extends TextInputProps {
  error?: string;
  width?: string;
  height?: string;
  isFullWidth?: boolean;
  disabled?: boolean;
  isFocus?: boolean;
}
