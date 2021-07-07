import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '@components/button';
import { DismissKeyboard } from '@components/dismiss-keyboard/dismiss-keyboard';
import { Screen } from '@components/screen';
import { TextField } from '@components/text-field';
import { AppService } from './app.service';

import { RowBox } from '@styles/components/row-box.styles';

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('ssss');

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
        </Screen>
      </DismissKeyboard>
    </AppService>
  );
};
