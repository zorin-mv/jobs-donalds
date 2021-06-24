import React, { MouseEvent, useEffect, useState } from 'react';

import { ISelectProps } from './select.typings';

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

  const selectedChange = (e: MouseEvent<HTMLDivElement>) => {
    setSelected((e.target as Element).textContent || selected);
    toggleActive();
  };

  const escPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false);
    }
  };

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
        {selected}
        <i></i>
      </SelectStyled.Title>
      {isActive && (
        <>
          <SelectStyled.Content maxHeight={maxHeight}>
            {options.map((option) => (
              <SelectStyled.Item key={option.id} onClick={selectedChange}>
                {option.title}
              </SelectStyled.Item>
            ))}
          </SelectStyled.Content>
          <SelectStyled.BackDrop onClick={toggleActive} />
        </>
      )}
    </SelectStyled.Wrapper>
  );
};
