import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IButtonProps } from './button.typings';

import { ButtonStyles } from './button.styles';

export const Button: React.FC<IButtonProps> = ({
  title,
  onPress,
  isDisabled,
  variant = 'default',
  isFullWidth,
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.5} disabled={isDisabled}>
    <ButtonStyles.Button
      isFullWidth={isFullWidth}
      variant={variant}
      isDisabled={isDisabled}
    >
      <ButtonStyles.Title variant={variant}>{title}</ButtonStyles.Title>
    </ButtonStyles.Button>
  </TouchableOpacity>
);
