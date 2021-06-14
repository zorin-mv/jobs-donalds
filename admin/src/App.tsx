import React from 'react';
import './App.css';
import { Button } from './components/button';

export const App: React.FC = () => {
  const onClick = () => {
  }
  return (
    <div>
      <Button 
        title='Button'
        onClick={onClick}
      />
      <Button 
        title='Button'
        onClick={onClick}
        variant="primary"
      />
    </div>
  )
}