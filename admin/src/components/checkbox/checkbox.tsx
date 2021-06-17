import React from 'react';

import { Check } from '@components/icons/check';

import { ICheckBoxProps } from './checkbox.typings';

import { HidenInput, Label, StyledCheckBox } from './checkbox.styles';

export const CheckBox: React.FC<ICheckBoxProps> = ({
  title,
  onChange,
  isChecked,
  isDisabled,
  color,
}) => (
  <Label disabled={isDisabled} color={color}>
    <HidenInput
      onChange={onChange}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
    />
    <StyledCheckBox checked={isChecked} color={color}>
      {isChecked && <Check />}
    </StyledCheckBox>
    {title}
  </Label>
);
