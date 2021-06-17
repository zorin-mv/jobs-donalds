import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const Spacer = styled.div<SpaceProps>`
  & > * {
    ${space}
  }
`;
