import styled from 'styled-components';

export const FormWrapperStyles = {
  Wrapper: styled.div<{ isActive: boolean }>`
    position: relative;
    padding: 20px;
    width: 35%;
    height: 100%;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    margin: ${({ isActive }) => (isActive ? '0 0 0 20px' : '0 -100% 0 20px')};
    transition: 0.3s;
  `,

  Icon: styled.i`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  `,
};
