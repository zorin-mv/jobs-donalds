import styled, { css } from 'styled-components';

import { COLORS } from '@styles/colors';
import { FONT_SIZES } from '@styles/font-sizes';

import { ITextFieldStylesProps } from './text-field.typings';

const textFieldDisabled = css`
  opacity: 0.5;
`;

const textFieldState = css`
  :hover,
  :focus,
  :focus-visible {
    border: 2px solid ${COLORS.primary};
    outline-color: ${COLORS.primary};
  }
`;

export const TextFieldStyled = {
  Wrapper: styled.div<ITextFieldStylesProps>`
    position: relative;
    ${({ disabled }) => disabled && textFieldDisabled};

    input,
    textarea {
      padding: 10px;
      color: ${COLORS.default};
      font-size: ${FONT_SIZES.default};
      font-family: inherit;
      border-radius: 5px;
      resize: none;
      border: 2px solid ${({ error }) => (error ? COLORS.red : COLORS.default)};
      width: ${({ isFullWidth, width }) =>
        isFullWidth ? '100%' : width || '200px'};
      height: ${({ height }) => height || 'auto'};

      ${({ disabled }) => (disabled ? `cursor: not-allowed` : textFieldState)};
    }

    input:focus + label,
    textarea:focus + label {
      top: -12px;
    }

    label {
      position: absolute;
      background-color: ${COLORS.white};
      top: 10px;
      left: 10px;
      padding: 2px;
      transition: 0.3s;
      pointer-events: none;

      ${({ value }) => value && `top: -12px`}
    }
  `,
  ErrorBlock: styled.div<ITextFieldStylesProps>`
    position: absolute;
    width: ${({ isFullWidth, width }) =>
      isFullWidth ? '100%' : width || '200px'};
    padding: 0 10px;
    color: ${COLORS.red};
    font-size: 0.7em;
    border-radius: 5px;
    z-index: 1;
  `,
};
