import { Check } from '@components/icons/check';
import React from 'react';
import {
  LabelCheckBox,
  HidenCheckbox,
  StyledCheckbox,
} from './checkbox.styles';
import { ICheckBoxProps } from './checkbox.typings';

export const CheckBox: React.FC<ICheckBoxProps> = ({
  title,
  onChange,
  isChecked,
  isDisabled,
}) => (
  <LabelCheckBox disabled={isDisabled}>
    <HidenCheckbox
      onChange={onChange}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
    />
    <StyledCheckbox>{isChecked && <Check />}</StyledCheckbox>
    {title}
  </LabelCheckBox>
);
