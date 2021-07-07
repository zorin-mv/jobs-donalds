import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ICheckBoxProps {
  title: string;
  onChange(): void;
  isChecked: boolean;
  isDisabled?: boolean;
  color?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
