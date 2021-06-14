import { CheckBox } from './components/checkbox';
import React, { useState } from 'react';
import './App.css';
import { Button } from './components/button';

export const App: React.FC = () => {
  const onClick = () => {
  }

  const [checked, setChecked] = useState(false);

  const onChange = () => setChecked((c) => !c);

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
      <CheckBox onChange={onChange} isChecked={checked} title='1 var'/>
      <CheckBox onChange={onChange} title='2 var' isDisabled/>
      <CheckBox onChange={onChange} title='3 var' isChecked isDisabled/>
    </div>
  )
}