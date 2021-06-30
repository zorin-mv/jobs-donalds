import React from 'react';

import { images } from '@constants/images';

import { IFormWrapperProps } from './form-wrapper.typings';

import { FormWrapperStyles } from './form-wrapper.styles';

export const FormWrapper: React.FC<IFormWrapperProps> = ({
  isActive,
  onClick,
  children,
}) => (
  <FormWrapperStyles.Wrapper isActive={isActive}>
    <FormWrapperStyles.Icon>
      <img onClick={onClick} src={images.close} alt="close" />
    </FormWrapperStyles.Icon>
    {children}
  </FormWrapperStyles.Wrapper>
);
