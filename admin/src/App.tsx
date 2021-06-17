import React, { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { Radio } from '@components/checkbox';
import { Loader } from '@components/loader';
import { Select } from '@components/select';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { Button } from './components/button';
import { CheckBox } from './components/checkbox';

import './App.css';

export const App: React.FC = () => {
  const [selected, setSelected] = useState<string>('Choose One');
  const [state, setState] = useState<string>('');
  const [inputValue, setInputValue] = useState('');

  const [checked, setChecked] = useState<boolean>(false);

  const onChange = () => setChecked((c) => !c);

  const changeInputValue = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
  };

  const options = ['React', 'ReactNative', 'Nest', 'Mongo'];

  const newOptions = options.filter((option) => option !== selected);
  const onLoadOne = () => {
    trackPromise(
      promise.then((res: string) => setState(res)),
      'first'
    );
  };
  const onLoadTwo = () => {
    trackPromise(
      promise.then((res: string) => setState(res)),
      'second'
    );
  };

  const promise = new Promise<string>(function (resolve, reject) {
    setTimeout(() => resolve('done!'), 5000);
  });

  return (
    <div className="app-wrapper">
      <Button title="Button" onClick={onLoadOne} />
      <Button title="Button" onClick={onLoadTwo} variant="primary" />
      <div className="checkbox-wrapper">
        <CheckBox onChange={onChange} isChecked={checked} title="1 var" />
        <CheckBox onChange={onChange} title="2 var" isDisabled />
        <CheckBox onChange={onChange} title="3 var" isChecked isDisabled />
        <Radio onChange={onChange} isChecked={checked} title="1 var" />
        <Radio onChange={onChange} title="2 var" isDisabled />
        <Radio onChange={onChange} title="3 var" isChecked isDisabled />
      </div>
      <Select
        options={newOptions}
        selected={selected}
        setSelected={setSelected}
      />
      <Loader area="first">
        <div>{state}</div>
      </Loader>
      <Loader area="second" type="ThreeDots" color={COLORS.primary}>
        <div>{state}</div>
      </Loader>
      <TextField onChange={changeInputValue} value={inputValue} type="text" />
      <TextField
        onChange={changeInputValue}
        value={inputValue}
        type="text"
        disabled
      />
      <TextField
        onChange={changeInputValue}
        value={inputValue}
        type="text"
        error="Error input"
      />
      <TextField
        onChange={changeInputValue}
        value={inputValue}
        type="textarea"
        width="200px"
        height="100px"
      />
      <TextField
        onChange={changeInputValue}
        value={inputValue}
        type="textarea"
        width="200px"
        height="100px"
        disabled
      />
      <TextField
        onChange={changeInputValue}
        value={inputValue}
        type="textarea"
        width="200px"
        height="100px"
        error="Error textarea"
      />
    </div>
  );
};
