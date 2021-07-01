import React, { useEffect, useState } from 'react';

import { images } from '@constants/images';

import { IFormWrapperProps } from './form-wrapper.typings';

import { FormWrapperStyles } from './form-wrapper.styles';

export const FormWrapper: React.FC<IFormWrapperProps> = ({
  onClick,
  children,
}) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 100);
  });

  return (
    <FormWrapperStyles.Wrapper isActive={isShow}>
      <FormWrapperStyles.Icon>
        <img onClick={onClick} src={images.close} alt="close" />
      </FormWrapperStyles.Icon>
      {children}
    </FormWrapperStyles.Wrapper>
  );
};
