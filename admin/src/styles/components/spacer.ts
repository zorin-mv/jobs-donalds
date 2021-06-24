import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const SpacerStyled = styled.div<SpaceProps>`
  & > * {
    ${space}
  }
`;
