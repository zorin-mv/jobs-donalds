import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { FONT_SIZES } from '@styles/font-sizes';

import { IButtonStylesProps } from './button.typings';

export const ButtonStyles = styled.button<IButtonStylesProps>`
  display: block;
  cursor: pointer;
  padding: 10px;
  min-width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '100px')};
  min-height: 40px;
  border-radius: 5px;
  font-size: ${FONT_SIZES.default};
  background-color: ${({ variant }) =>
    variant ? COLORS[variant] : COLORS.default};

  :hover {
    opacity: 0.7;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'outlined':
        return `
            border: 2px solid ${COLORS[variant]};
            background-color: transparent;
            color: ${COLORS[variant]};
          `;
      default:
        return `
            border: 0;
            color: ${COLORS.white};
          `;
    }
  }}

  ${({ isDisabled }) => {
    if (isDisabled) {
      return `
          cursor: not-allowed;
          opacity: 0.4;

          :hover {
            opacity: 0.4;
          }
        `;
    }
  }};
`;
