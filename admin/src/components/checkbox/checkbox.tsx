import React from 'react';

import { Check } from '@components/icons/check';

import { ICheckBoxProps } from './checkbox.typings';

import { HidenInput, Label, StyledCheckBox } from './checkbox.styles';

export const CheckBox: React.FC<ICheckBoxProps> = ({
  title,
  onChange,
  isChecked,
  isDisabled,
}) => (
  <Label disabled={isDisabled}>
    <HidenInput
      onChange={onChange}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
    />
    <StyledCheckBox>{isChecked && <Check />}</StyledCheckBox>
    {title}
  </Label>
);