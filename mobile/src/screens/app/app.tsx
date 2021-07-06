import React from 'react';
import { Alert } from 'react-native';

import { Button } from '@components/button';
import { Screen } from '@components/screen';
import { AppService } from './app.service';

import { RowBox } from '@styles/components/row-box.styles';

export const App: React.FC = () => {
  const handleClick = () => {
    Alert.alert('Press');
  };

  return (
    <AppService>
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
      </Screen>
    </AppService>
  );
};
