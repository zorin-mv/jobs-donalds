import React, { useState } from 'react';

import { Radio } from '@components/checkbox';
import { Select } from '@components/select';
import { Button } from './components/button';
import { CheckBox } from './components/checkbox';

import './App.css';

export const App: React.FC = () => {
  const [selected, setSelected] = useState<string>('Choose One');
  const onClick = () => {};

  const [checked, setChecked] = useState<boolean>(false);

  const onChange = () => setChecked((c) => !c);

  const options = ['React', 'ReactNative', 'Nest', 'Mongo'];

  const newOptions = options.filter((option) => option !== selected);

  return (
    <div>
      <Button title="Button" onClick={onClick} />
      <Button title="Button" onClick={onClick} variant="primary" />
      <CheckBox onChange={onChange} isChecked={checked} title="1 var" />
      <CheckBox onChange={onChange} title="2 var" isDisabled />
      <CheckBox onChange={onChange} title="3 var" isChecked isDisabled />
      <Radio onChange={onChange} isChecked={checked} title="1 var" />
      <Radio onChange={onChange} title="2 var" isDisabled />
      <Radio onChange={onChange} title="3 var" isChecked isDisabled />
      <Select
        options={newOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
