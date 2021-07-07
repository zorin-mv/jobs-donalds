import { COLORS } from '@styles/colors';
import { FONT_SIZES } from '@styles/font-sizes';
import styled from 'styled-components/native';

import { IButtonStylesProps } from './button.typings';

export const ButtonStyles = {
  Button: styled.View<IButtonStylesProps>`
    justify-content: center;
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    ${({ isFullWidth }) => isFullWidth && 'min-width: 100%'};
    font-size: ${FONT_SIZES.default};
    opacity: ${({ isDisabled }) => (isDisabled ? '0.4' : '1')};

    ${({ variant }) => `
      background-color: ${
        variant === 'outlined' ? COLORS.white : COLORS[variant]
      };
      border: 2px solid ${COLORS[variant]};
    `};
  `,
  Title: styled.Text<IButtonStylesProps>`
    color: ${({ variant }) =>
      variant === 'outlined' ? COLORS[variant] : COLORS.white};
  `,
};
