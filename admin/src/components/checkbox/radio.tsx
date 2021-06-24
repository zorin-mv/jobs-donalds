import React from 'react';

import { ICheckBoxProps } from './checkbox.typings';

import { CheckboxStyled } from './checkbox.styles';

export const Radio: React.FC<ICheckBoxProps> = ({
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
    <CheckboxStyled.Radio checked={isChecked} color={color} />
    {title}
  </CheckboxStyled.Label>
);
