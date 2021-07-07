import React, { useEffect, useRef, useState } from 'react';
import { Animated, NativeSyntheticEvent, TextInputFocusEventData, View } from 'react-native';

import { ITextFieldProps } from './text-field.typings';

import { TextFieldStyled } from './text-field.styles';

export const TextField: React.FC<ITextFieldProps> = ({
  width,
  isFullWidth,
  value,
  disabled,
  error,
  height,
  onChangeText,
  placeholder,
  onBlur,
  multiline,
  keyboardType,
  maxLength,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const blurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur?.(e);
    if (!value) {
      startAnimated(0);
    }
    setIsFocus(false);
  };

  const startAnimated = (toValue: number) =>
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

  const translate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  useEffect(() => {
    if (value) {
      animation.setValue(1);
    } else if (!value && !isFocus) {
      startAnimated(0);
    }
  }, [value]);

  const focusHandler = () => {
    startAnimated(1);
    setIsFocus(true);
  };

  return (
    <View>
      <TextFieldStyled.Wrapper
        width={width}
        isFullWidth={isFullWidth}
        disabled={disabled}
        error={error}
        height={height}
        value={value}
        placeholder={placeholder}
      >
        <TextFieldStyled.Input
          value={value}
          onChangeText={onChangeText}
          disabled={disabled}
          onBlur={blurHandler}
          isFullWidth={isFullWidth}
          onFocus={focusHandler}
          error={error}
          multiline={multiline}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={!disabled}
        />
        {placeholder && (
          <TextFieldStyled.Animated
            style={{
              transform: [{ translateY: translate }],
            }}
          >
            <TextFieldStyled.Label value={value}>
              {placeholder}
            </TextFieldStyled.Label>
          </TextFieldStyled.Animated>
        )}
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
    </View>
  );
};
