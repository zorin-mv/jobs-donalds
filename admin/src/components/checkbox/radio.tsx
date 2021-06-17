import React from 'react';

import { ICheckBoxProps } from './checkbox.typings';

import { HidenInput, Label, StyledRadio } from './checkbox.styles';

export const Radio: React.FC<ICheckBoxProps> = ({
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
    <StyledRadio checked={isChecked} color={color} />
    {title}
  </Label>
);
