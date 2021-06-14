import { COLORS } from '@styles/colors';
import styled from 'styled-components';
import { ICheckBoxStyledProps } from './checkbox.typings';

export const LabelCheckBox = styled.label<ICheckBoxStyledProps>`
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

        ${StyledCheckbox} {
          background-color: ${COLORS.primary};
        }
      }
    `;
  }}
`;

export const HidenCheckbox = styled.input<ICheckBoxStyledProps>`
  display: none;
`;

export const StyledCheckbox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  border: 2px solid ${COLORS.black};
  background-color: transparent;

  ${HidenCheckbox}:checked + & {
    background-color: ${COLORS.primary};
  }
`;