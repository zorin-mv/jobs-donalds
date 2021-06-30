import React from 'react';

import { ITextFieldProps } from './text-field.typings';

import { TextFieldStyled } from './text-field.styles';

export const TextField: React.FC<ITextFieldProps> = ({
  width,
  isFullWidth,
  value,
  type,
  disabled,
  error,
  height,
  onChange,
  placeholder,
  name,
  onBlur,
}) => (
  <div>
    <TextFieldStyled.Wrapper
      width={width}
      isFullWidth={isFullWidth}
      disabled={disabled}
      error={error}
      height={height}
      value={value}
      placeholder={placeholder}
    >
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
        />
      )}
      {placeholder && <label>{placeholder}</label>}
    </TextFieldStyled.Wrapper>
    {error && (
      <TextFieldStyled.ErrorBlock
        isFullWidth={isFullWidth}
        width={width}
        value={value}
      >
        {error}
      </TextFieldStyled.ErrorBlock>
    )}
  </div>
);
