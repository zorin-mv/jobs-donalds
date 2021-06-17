import React, { MouseEvent, useEffect, useState } from 'react';

import { ISelectProps } from './select.typings';

import {
    SelectBackDrop, SelectContent, SelectItem, SelectTitle, SelectWrapper
} from './select.styles';

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
    <SelectWrapper isFullWidth={isFullWidth}>
      <SelectTitle
        onClick={toggleActive}
        isDisabled={isDisabled}
        isActive={isActive}
      >
        {selected}
        <i></i>
      </SelectTitle>
      {isActive && (
        <>
          <SelectContent maxHeight={maxHeight}>
            {options.map((option) => (
              <SelectItem key={option.id} onClick={selectedChange}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
          <SelectBackDrop onClick={toggleActive} />
        </>
      )}
    </SelectWrapper>
  );
};
