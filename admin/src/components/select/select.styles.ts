import styled from 'styled-components';

import { COLORS } from '@styles/colors';

import { ISelectStylesProps } from './select.typings';

export const SelectWrapper = styled.div<{ isFullWidth?: boolean }>`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '400px')};
`;

export const SelectTitle = styled.div<ISelectStylesProps>`
  position: relative;
  z-index: 1;
  padding: 15px 20px;
  margin-bottom: 5px;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 700;
  color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  ${({ isDisabled }) =>
    isDisabled &&
    `
    cursor: not-allowed;
    opacity: 0.7;
  `}
  ${({ isActive }) => isActive && `i {transform: rotate(180deg)}`}

  i {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: ${COLORS.black} transparent transparent transparent;
    transition: transform 0.5s;
  }
`;

export const SelectContent = styled.div<{ maxHeight?: string }>`
  position: relative;
  z-index: 1;
  padding: 15px 20px;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: ${COLORS.black};
  max-height: ${({ maxHeight }) => maxHeight || '200px'};
  overflow-y: auto;
`;

export const SelectItem = styled.div`
  padding: 10px 0;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 2px solid ${COLORS.grey};
  }
`;

export const SelectBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;
