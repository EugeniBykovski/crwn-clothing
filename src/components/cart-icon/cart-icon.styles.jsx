import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartContainer = styled.div`
  position: relative;

  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  bottom: 12px;

  font-size: 10px;
  font-weight: bold;
`;