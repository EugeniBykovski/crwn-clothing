import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;

  width: 240px;
  height: 340px;

  top: 90px;
  right: 40px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  border: 1px solid black;
  background-color: white;

  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  margin: 50px auto;
      
  font-size: 18px;
`;

export const CartItemsContainer = styled.div`
  height: 240px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
`;