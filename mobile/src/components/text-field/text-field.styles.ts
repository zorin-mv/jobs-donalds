import { Animated } from 'react-native';

import { COLORS } from '@styles/colors';
import { FONT_SIZES } from '@styles/font-sizes';
import styled from 'styled-components/native';

import { ITextFieldProps } from './text-field.typings';

export const TextFieldStyled = {
  Wrapper: styled.View<ITextFieldProps>`
    position: relative;
    padding: 10px 0;
  `,

  Input: styled.TextInput<ITextFieldProps>`
    padding: 15px 10px;
    color: ${COLORS.default};
    font-size: ${FONT_SIZES.default};
    border-radius: 5px;
    border: 2px solid ${({ error }) => (error ? COLORS.red : COLORS.default)};
    width: ${({ isFullWidth, width }) =>
      isFullWidth ? '100%' : width || '200px'};
    height: ${({ height }) => height || 'auto'};

    ${({ disabled }) => disabled && 'opacity: 0.3'};
  `,

  Animated: styled(Animated.View)`
    position: absolute;
    top: 22px;
    left: 15px;
  `,

  Label: styled.Text<ITextFieldProps>`
    background-color: ${COLORS.white};
    color: ${COLORS.grey};
  `,
  ErrorBlock: styled.Text<ITextFieldProps>`
    position: absolute;
    bottom: -5px;
    left: 15px;
    width: ${({ isFullWidth, width }) =>
      isFullWidth ? '100%' : width || '200px'};
    color: ${COLORS.red};
    font-size: 10px;
  `,
};
