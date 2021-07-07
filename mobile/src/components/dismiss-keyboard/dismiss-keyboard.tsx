import React from 'react';
import { Keyboard } from 'react-native';

import styled from 'styled-components/native';

const Touchable = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const DismissKeyboard: React.FC = ({ children }) => (
  <Touchable onPress={Keyboard.dismiss}>{children}</Touchable>
);
