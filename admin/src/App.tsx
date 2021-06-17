import React, { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { Radio } from '@components/checkbox';
import { Loader } from '@components/loader';
import { Select } from '@components/select';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { Flex } from '@styles/components/flexbox';
import { Spacer } from '@styles/components/spacer';
import { Button } from './components/button';
import { CheckBox } from './components/checkbox';

import { ISelectOption } from '@components/select/select.typings';

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

  const options: ISelectOption[] = [
    {
      title: 'React',
      id: '1',
    },
    {
      title: 'Redux',
      id: '2',
    },
    {
      title: 'React Native',
      id: '3',
    },
    {
      title: 'Nest',
      id: '4',
    },
    {
      title: 'Postgres SQL',
      id: '5',
    },
  ];

  const newOptions: ISelectOption[] = options.filter(
    (option) => option.title !== selected
  );
  const onLoadOne = () => {
    trackPromise(
      getPomise().then((res: string) => setState(res)),
      'first'
    );
  };
  const onLoadTwo = () => {
    trackPromise(
      getPomise().then((res: string) => setState(res)),
      'second'
    );
  };

  const getPomise = () =>
    new Promise<string>(function (resolve) {
      setTimeout(() => resolve('done!'), 5000);
    });

  return (
    <div className="app-wrapper">
      <Spacer mb={4}>
        <Flex mr={4}>
          <Button title="Button" onClick={onLoadOne} />
          <Button title="Button" onClick={onLoadTwo} variant="primary" />
          <Button title="Button" onClick={onLoadTwo} variant="secondary" />
          <Button title="Button" onClick={onLoadTwo} variant="outlined" />
        </Flex>
        <Flex alignItems="center" flexWrap="wrap" mr={4}>
          <CheckBox onChange={onChange} isChecked={checked} title="1 var" />
          <CheckBox onChange={onChange} title="2 var" isDisabled />
          <CheckBox onChange={onChange} title="3 var" isChecked isDisabled />
          <Radio onChange={onChange} isChecked={checked} title="1 var" />
          <Radio onChange={onChange} title="2 var" isDisabled />
          <Radio onChange={onChange} title="3 var" isChecked isDisabled />
          <CheckBox
            onChange={onChange}
            isChecked={checked}
            title="1 var"
            color={COLORS.primary}
          />
          <Radio
            onChange={onChange}
            isChecked={checked}
            title="1 var"
            color={COLORS.primary}
          />
          <CheckBox
            onChange={onChange}
            isChecked={checked}
            title="1 var"
            color={COLORS.secondary}
          />
          <Radio
            onChange={onChange}
            isChecked={checked}
            title="1 var"
            color={COLORS.secondary}
          />
        </Flex>
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
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          type="text"
          placeholder="Placeholder 1"
        />
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          type="text"
          disabled
          width="400px"
          placeholder="Placeholder 2"
        />
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          type="text"
          error="Error input"
          width="500px"
          placeholder="Placeholder 3"
        />
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          type="textarea"
          width="200px"
          height="100px"
          placeholder="Placeholder 4"
        />
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          type="textarea"
          width="300px"
          height="200px"
          disabled
          placeholder="Placeholder 5"
        />
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          type="textarea"
          width="400px"
          height="300px"
          error="Error textarea"
          placeholder="Placeholder 6"
        />
      </Spacer>
    </div>
  );
};
