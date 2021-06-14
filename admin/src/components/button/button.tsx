import React from 'react';
import { IButtonProps } from './button.typings';
import { ButtonStyles } from './button.styles';

export const Button: React.FC<IButtonProps> = ({
  title,
  onClick,
  isDisabled,
  variant,
  isFullWidth,
}) => (
  <ButtonStyles
    isFullWidth={isFullWidth}
    variant={variant || 'default'}
    onClick={onClick}
    isDisabled={isDisabled}
  >
    {title}
  </ButtonStyles>
);
