import React from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox as CheckboxStyled } from 'react-native-paper';

import { ICheckBoxProps } from './checkbox.typings';

export const CheckBox: React.FC<ICheckBoxProps> = ({
  title,
  onChange,
  isChecked,
  isDisabled,
  color,
  style,
  labelStyle,
}) => (
  <CheckboxStyled.Item
    status={isChecked ? 'checked' : 'unchecked'}
    onPress={(!isDisabled && onChange) || undefined}
    disabled={isDisabled}
    color={color}
    label={title}
    mode="android"
    uncheckedColor={color}
    style={[styles.container, style]}
    labelStyle={labelStyle}
  />
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
