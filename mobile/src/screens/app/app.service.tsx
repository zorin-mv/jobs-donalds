import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

export const AppService: FC = ({ children }) => (
  <NavigationContainer>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </NavigationContainer>
);
