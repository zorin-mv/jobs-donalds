import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '@components/button';
import { CheckBox } from '@components/checkbox';
import { DismissKeyboard } from '@components/dismiss-keyboard/dismiss-keyboard';
import { Screen } from '@components/screen';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { AppService } from './app.service';

import { RowBox } from '@styles/components/row-box.styles';

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('ssss');
  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked(!checked);
  const handleClick = () => {
    Alert.alert('Press');
  };

  return (
    <AppService>
      <DismissKeyboard>
        <Screen background="white">
          <RowBox>
            <Button onPress={handleClick} title="Button" />
            <Button onPress={handleClick} title="Button" variant="primary" />
            <Button
              onPress={handleClick}
              title="Button"
              variant="primary"
              isDisabled
            />
            <Button
              onPress={handleClick}
              title="Button"
              variant="outlined"
              isDisabled
            />
            <Button
              onPress={handleClick}
              title="Button"
              variant="secondary"
              isFullWidth
            />
          </RowBox>
          <TextField
            placeholder="Text Input"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TextField
            placeholder="Text Input"
            value={inputValue}
            onChangeText={setInputValue}
            disabled
          />
          <TextField
            placeholder="Text Input"
            value={inputValue}
            onChangeText={setInputValue}
            isFullWidth
            error="blablal"
            multiline
          />
          <CheckBox
            title="Are you ready?"
            isChecked={checked}
            onChange={handleCheck}
            color={COLORS.primary}
          />
          <CheckBox
            title="You ready"
            isChecked
            onChange={handleCheck}
            color={COLORS.primary}
            isDisabled
          />
        </Screen>
      </DismissKeyboard>
    </AppService>
  );
};
