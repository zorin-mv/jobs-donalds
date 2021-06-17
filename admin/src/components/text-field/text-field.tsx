import React from 'react';

import { ITextFieldProps } from './text-field.typings';

import { ErrorBlock, TextFieldWrapper } from './text-field.styles';

export const TextField: React.FC<ITextFieldProps> = ({
  width,
  isFullWidth,
  value,
  type,
  disabled,
  error,
  height,
  onChange,
}) => (
  <div>
    <TextFieldWrapper
      width={width}
      isFullWidth={isFullWidth}
      disabled={disabled}
      error={error}
      height={height}
      value={value}
    >
      {type === 'textarea' ? (
        <textarea value={value} onChange={onChange} disabled={disabled} />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      <label>Input text</label>
    </TextFieldWrapper>
    {error && (
      <ErrorBlock isFullWidth={isFullWidth} width={width} value={value}>
        {error}
      </ErrorBlock>
    )}
  </div>
);
