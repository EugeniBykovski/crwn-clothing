import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  position: relative;
    
  width: 22vw;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;  

  &:hover {
    .image {
      opacity: .8;
    }

    button {
      display: flex;

      opacity: .85;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
  
      button {  
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  display: none;

  width: 80%;
  top: 255px;

  opacity: .7;

  @media screen and (max-width: 800px) {
    display: block;
    min-width: unset;
    padding: 0 10px;

    opacity: .9;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;

  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;

  display: flex;
  justify-content: space-between;

  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;