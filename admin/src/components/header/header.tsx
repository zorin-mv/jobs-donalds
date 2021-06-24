import React from 'react';

import { ContainerStyled } from '@styles/components';

import { images } from '@constants/images';
import { ROUTES } from '@constants/routes';

import { HeaderStyled } from './header.styles';

export const Header: React.FC = () => (
  <HeaderStyled.HeaderWrapper>
    <ContainerStyled>
      <HeaderStyled.Header>
        <HeaderStyled.Logo>
          <span>Jobs D</span>
          <img src={images.logo} alt="logo" />
          <span>nald`s</span>
        </HeaderStyled.Logo>
        <HeaderStyled.Navigation>
          <HeaderStyled.NavItem exact to="/">
            <span>Orders</span>
          </HeaderStyled.NavItem>
          <HeaderStyled.NavItem exact to={ROUTES.ingredients}>
            <span>Ingredients</span>
          </HeaderStyled.NavItem>
          <HeaderStyled.NavItem exact to={ROUTES.burgers}>
            <span>Burgers</span>
          </HeaderStyled.NavItem>
        </HeaderStyled.Navigation>
      </HeaderStyled.Header>
    </ContainerStyled>
  </HeaderStyled.HeaderWrapper>
);
