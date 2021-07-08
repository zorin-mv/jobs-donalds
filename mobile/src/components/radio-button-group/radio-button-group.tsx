import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { IRadioButtonProps } from './radio-button-group.typings';

export const RadioButtonGroup: React.FC<IRadioButtonProps> = ({
  onChange,
  radioGroup,
  isDisabled,
  color,
  style,
  labelStyle,
}) => {
  const initValue = radioGroup.find(
    ({ defaultChecked }) => defaultChecked
  )?.value;
  const [radioValue, setRadioValue] = useState(initValue || '');

  const changeHandler = (value: string) => {
    setRadioValue(value);
    onChange(value);
  };

  return (
    <RadioButton.Group onValueChange={changeHandler} value={radioValue}>
      {radioGroup.map(({ id, defaultChecked, value, label }) => (
        <RadioButton.Item
          label={label}
          value={value}
          color={color}
          status={defaultChecked ? 'checked' : 'unchecked'}
          disabled={isDisabled}
          mode="android"
          key={id}
          style={[styles.container, style]}
          labelStyle={labelStyle}
          uncheckedColor={color}
        />
      ))}
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
