import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  height: 80px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .name {
    font-size: 16px;
  }
`;