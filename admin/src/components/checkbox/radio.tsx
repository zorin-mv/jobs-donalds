import React from 'react';

import { ICheckBoxProps } from './checkbox.typings';

import { HidenInput, Label, StyledRadio } from './checkbox.styles';

export const Radio: React.FC<ICheckBoxProps> = ({
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
    <StyledRadio />
    {title}
  </Label>
);
