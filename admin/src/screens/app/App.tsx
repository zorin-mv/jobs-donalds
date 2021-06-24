import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Header } from '@components/header';
import { Router } from './app.router';

import './app.css';

export const App: React.FC = () => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <Router />
    </div>
  </HashRouter>
);
