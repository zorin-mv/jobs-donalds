import React from 'react';

import { Button } from '@components/button';
import { Loader } from '@components/loader';
import { FlexStyled } from '@styles/components';

import { images } from '@constants/images';
import { PROMISES_AREA } from '@constants/promises-area';

import { IListProps } from './list.typings';

import { ListStyles } from './list.styles';

export const List: React.FC<IListProps> = ({
  isActive,
  onClick,
  list,
  onItemClick,
  title,
  onRemove,
}) => {
  const clickHandler = (id: string) => () => onItemClick(id);

  const removeListItem =
    (id: string) => (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      e.stopPropagation();
      return onRemove(id);
    };

  return (
    <ListStyles.Wrapper isActive={isActive}>
      <ListStyles.Title>List of {title}</ListStyles.Title>
      <ListStyles.Header>
        <div>Name</div>
        <div>Calory</div>
        <div>Image</div>
        <ListStyles.DeleteIcon />
      </ListStyles.Header>
      <ListStyles.List>
        <Loader area={PROMISES_AREA.getIngredients}>
          {list.map(({ id, title, digit, image }) => (
            <ListStyles.ListItem key={id} onClick={clickHandler(id)}>
              <div>{title}</div>
              <div>{digit}</div>
              <div>
                <img src={image || images.picker} alt="icon" />
              </div>
              <ListStyles.DeleteIcon>
                <img
                  className="delete-icon"
                  src={images.close}
                  alt="delete"
                  onClick={removeListItem(id)}
                />
              </ListStyles.DeleteIcon>
            </ListStyles.ListItem>
          ))}
        </Loader>
      </ListStyles.List>
      <FlexStyled justifyContent="center">
        <Button
          title={`Add new ${title}`}
          onClick={onClick}
          variant="primary"
        />
      </FlexStyled>
    </ListStyles.Wrapper>
  );
};
