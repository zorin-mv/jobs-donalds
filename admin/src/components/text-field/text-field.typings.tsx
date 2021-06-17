import React from 'react';

export interface ITextFieldStylesProps {
  error?: string;
  width?: string;
  height?: string;
  isFullWidth?: boolean;
  disabled?: boolean;
  value: string;
}

export interface ITextFieldProps extends ITextFieldStylesProps {
  type: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}
