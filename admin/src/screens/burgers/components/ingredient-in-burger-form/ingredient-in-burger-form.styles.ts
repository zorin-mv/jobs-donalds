import styled from 'styled-components';

export const IngredientInBurgerFormStyles = {
  Form: styled.form`
    position: absolute;
    width: 400px;
    min-height: 300px;
    top: 20%;
    left: 50%;
    z-index: 20;
    transform: translateX(-50%);
    padding: 50px 30px 30px;
    border-radius: 5px;
    background-color: #fff;
  `,
  Icon: styled.i`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  `,
  BackDrop: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
  `,

  Title: styled.div`
    font-size: 2rem;
    font-weight: 500;
  `,
};
