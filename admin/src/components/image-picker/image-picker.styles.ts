import styled from 'styled-components';

export const ImagePickerStyles = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;

    input {
      display: none;
    }
  `,

  Icon: styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin-right: 20px;
  `,
};
