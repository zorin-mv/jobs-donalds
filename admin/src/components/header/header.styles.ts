import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';

export const HeaderStyled = {
  HeaderWrapper: styled.div`
    padding: 15px 20px;
    box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.19);
  `,

  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    margin: 0 -5px;
  `,
  Navigation: styled.nav`
    display: flex;
    margin: 0 -10px;
  `,

  NavItem: styled(NavLink)`
    color: ${COLORS.default};
    text-decoration: none;
    padding: 0 10px;
    transition: 0.3s;

    &.active {
      color: ${COLORS.primary};

      span::after {
        left: 0;
        width: 100%;
      }
    }

    :hover {
      color: ${COLORS.primary};

      span::after {
        left: 0;
        width: 100%;
      }
    }

    span {
      position: relative;

      ::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        height: 2px;
        width: 0;
        background-color: ${COLORS.primary};
        transition: 0.3s;
      }
    }
  `,
};
