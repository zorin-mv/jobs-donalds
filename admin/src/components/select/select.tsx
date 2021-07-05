import React, { MouseEvent, useEffect, useState } from 'react';

import { ISelectOption, ISelectProps } from './select.typings';

import { SelectStyled } from './select.styles';

export const Select: React.FC<ISelectProps> = ({
  options,
  selected,
  setSelected,
  maxHeight,
  isDisabled,
  isFullWidth,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => !isDisabled && setIsActive(!isActive);

  const selectedChange = (e: MouseEvent<HTMLDivElement>, id: string) => {
    setSelected({
      name: (e.target as Element).textContent || selected.name,
      id,
    });
    toggleActive();
  };

  const escPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false);
    }
  };

  const newOptions: ISelectOption[] = options.filter(
    (option) => option.name !== selected.name
  );

  const clickHandler = (id: string) => (e: MouseEvent<HTMLDivElement>) =>
    selectedChange(e, id);

  useEffect(() => {
    document.addEventListener('keydown', escPress);
    return () => {
      document.removeEventListener('keydown', escPress);
    };
  }, []);

  return (
    <SelectStyled.Wrapper isFullWidth={isFullWidth}>
      <SelectStyled.Title
        onClick={toggleActive}
        isDisabled={isDisabled}
        isActive={isActive}
      >
        {selected.name}
        <i />
      </SelectStyled.Title>
      {isActive && (
        <>
          <SelectStyled.Content maxHeight={maxHeight}>
            {newOptions.map(({ id, name }) => (
              <SelectStyled.Item key={id} onClick={clickHandler(id)}>
                {name}
              </SelectStyled.Item>
            ))}
          </SelectStyled.Content>
          <SelectStyled.BackDrop onClick={toggleActive} />
        </>
      )}
    </SelectStyled.Wrapper>
  );
};
