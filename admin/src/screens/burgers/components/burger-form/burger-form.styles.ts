import styled from 'styled-components';

import { COLORS } from '@styles/colors';

export const BurgerFormStyles = {
  Form: styled.form`
    padding: 30px 0;
  `,

  List: styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 2px solid ${COLORS.black};
    border-radius: 5px;
  `,

  Items: styled.div`
    display: flex;
    align-items: center;
    padding: 5px;

    * {
      padding: 0 2px;
    }

    img {
      width: 30px;
      height: 30px;
    }
  `,
};
