import styled from 'styled-components';

import { COLORS } from '@styles/colors';

export const ListStyles = {
  Wrapper: styled.div`
    width: 50%;
    padding: 20px 0;
    transition: 0.3s;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    height: max-content;
  `,
  Title: styled.div`
    font-size: 2em;
    font-weight: bold;
    padding: 15px 40px;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px 10px 40px;
    font-size: 0.8em;
    border-bottom: 1px solid ${COLORS.grey};
    color: ${COLORS.grey};

    div {
      width: 30%;
      padding: 5px;

      :nth-child(2) {
        text-align: center;
      }
      :nth-child(3) {
        text-align: right;
      }
    }
  `,

  List: styled.div`
    overflow-y: scroll;
    max-height: 585px;
    margin-bottom: 20px;
  `,

  ListItem: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    cursor: pointer;

    :hover {
      .delete-icon {
        opacity: 0.5;
      }
    }

    div {
      width: 30%;
      padding: 5px;

      :nth-child(2) {
        text-align: center;
      }
      :nth-child(3) {
        text-align: right;
      }
    }

    img {
      width: 50px;
      height: 50px;
    }
  `,

  DeleteIcon: styled.div`
    text-align: right;
    width: 10% !important;
    cursor: pointer;

    img {
      width: 15px;
      height: 15px;
      transition: 0.3s;
      opacity: 0;

      :hover {
        opacity: 1 !important;
      }
    }
  `,
};
