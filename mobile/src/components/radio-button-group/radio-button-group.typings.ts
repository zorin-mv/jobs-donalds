import { Dispatch, SetStateAction } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IRadioButtonProps {
  onChange: Dispatch<SetStateAction<string>>;
  isDisabled?: boolean;
  color?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  radioGroup: IRadioGroup[];
}

interface IRadioGroup {
  id: string;
  value: string;
  label: string;
  defaultChecked: boolean;
}
