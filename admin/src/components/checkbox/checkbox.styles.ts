import styled from 'styled-components';

import { COLORS } from '@styles/colors';

import { ICheckBoxStyledProps } from './checkbox.typings';

export const Label = styled.label<ICheckBoxStyledProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ disabled }) => {
    if (disabled) {
      return `
        cursor: not-allowed;
        opacity: 0.7;
      `;
    }

    return `
      &:hover {
        opacity: 0.7;

        ${StyledCheckBox} {
          background-color: ${COLORS.primary};
        }
      }
    `;
  }}
`;

export const HidenInput = styled.input<ICheckBoxStyledProps>`
  display: none;
`;

export const StyledCheckBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  border: 2px solid ${COLORS.black};
  background-color: transparent;

  ${HidenInput}:checked + & {
    background-color: ${COLORS.primary};
  }
`;

export const StyledRadio = styled.div`
  display: block;
  position: relative;
  margin-right: 7px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${COLORS.primary};
  background-color: transparent;

  ${HidenInput}:checked + &::before {
    background-color: ${COLORS.primary};
  }

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
  }
`;
