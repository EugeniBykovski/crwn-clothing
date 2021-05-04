import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  width: 23%;
  text-transform: capitalize;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  
  font-size: 36px;
`;

