import styled from 'styled-components';

import { COLORS } from '@styles/colors';

import { ICheckBoxStyledProps } from './checkbox.typings';

export const CheckboxStyled = {
  Label: styled.label<ICheckBoxStyledProps>`
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    ${({ disabled, color }) => {
      if (disabled) {
        return `
        cursor: not-allowed;
        opacity: 0.7;
      `;
      }

      const bgColor = color || COLORS.default;

      return `
      &:hover {
        opacity: 0.7;

        & + div {
          background-color: ${bgColor};
        }
      }
    `;
    }}
  `,
  HidenInput: styled.input<ICheckBoxStyledProps>`
    display: none;
  `,
  CheckBox: styled.div<ICheckBoxStyledProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    border: 2px solid ${({ color }) => (color ? color : COLORS.default)};
    background-color: transparent;

    ${({ checked, color }) =>
      checked &&
      `
    background-color: ${color ? color : COLORS.default};
  `}
  `,
  Radio: styled.div<ICheckBoxStyledProps>`
    display: inline-block;
    position: relative;
    margin-right: 7px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid ${({ color }) => (color ? color : COLORS.default)};
    background-color: transparent;

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: transparent;

      ${({ checked, color }) =>
        checked && `background-color: ${color ? color : COLORS.default};`}
    }
  `,
};
