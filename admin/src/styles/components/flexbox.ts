import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

export const Flex = styled.div<FlexboxProps & SpaceProps>`
  display: flex;
  ${flexbox}

  & > * {
    ${space}
  }
`;
