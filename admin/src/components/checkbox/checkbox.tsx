import React from 'react';

import { Check } from '@components/icons/check';

import { ICheckBoxProps } from './checkbox.typings';

import { CheckboxStyled } from './checkbox.styles';

export const CheckBox: React.FC<ICheckBoxProps> = ({
  title,
  onChange,
  isChecked,
  isDisabled,
  color,
}) => (
  <CheckboxStyled.Label disabled={isDisabled} color={color}>
    <CheckboxStyled.HidenInput
      onChange={onChange}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
    />
    <CheckboxStyled.CheckBox checked={isChecked} color={color}>
      {isChecked && <Check />}
    </CheckboxStyled.CheckBox>
    {title}
  </CheckboxStyled.Label>
);
