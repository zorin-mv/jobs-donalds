import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { BurgersPage } from '../burgers';
import { IngredientsPage } from '../ingredients';
import { OrdersPage } from '../orders';

import { ROUTES } from '@constants/routes';

export const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <OrdersPage />
    </Route>
    <Route exact path={ROUTES.ingredients}>
      <IngredientsPage />
    </Route>
    <Route exact path={ROUTES.burgers}>
      <BurgersPage />
    </Route>
  </Switch>
);
