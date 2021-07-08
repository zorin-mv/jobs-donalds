import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '@components/button';
import { CheckBox } from '@components/checkbox';
import { DismissKeyboard } from '@components/dismiss-keyboard/dismiss-keyboard';
import { RadioButtonGroup } from '@components/radio-button-group';
import { Screen } from '@components/screen';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { AppService } from './app.service';

import { RowBox } from '@styles/components/row-box.styles';

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('ssss');
  const [checked, setChecked] = useState(false);
  const [genderValue, setGenderValue] = useState('');
  const [radioValue, setRadioValue] = useState('');

  console.log(genderValue);
  console.log(radioValue);

  const handleCheck = () => setChecked(!checked);
  const handleClick = () => {
    Alert.alert('Press');
  };

  const radioListGender = [
    {
      label: 'Male',
      value: 'male',
      id: '1',
      defaultChecked: true,
    },
    {
      label: 'Female',
      value: 'female',
      id: '2',
      defaultChecked: false,
    },
  ];

  const radioList = [
    {
      label: 'Beer',
      value: 'beer',
      id: '1',
      defaultChecked: true,
    },
    {
      label: 'Water',
      value: 'water',
      id: '2',
      defaultChecked: false,
    },
  ];

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
          <RadioButtonGroup
            radioGroup={radioListGender}
            onChange={setGenderValue}
            isDisabled
          />
          <RadioButtonGroup
            radioGroup={radioList}
            onChange={setRadioValue}
            color={COLORS.primary}
          />
        </Screen>
      </DismissKeyboard>
    </AppService>
  );
};
