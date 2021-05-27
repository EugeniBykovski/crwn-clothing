import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 30%;
	height: ${({ size }) => (size ? '380px' : '240px')};
	margin: 0 7.5px 15px;
  
  display: flex;
	flex: 1 1 auto;
	justify-content: center;
	align-items: center;

	border: 1px solid black;
  overflow: hidden;
  
	&:hover {
    cursor: pointer;
    
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
		& .content {
			opacity: 0.9;
		}
  }
  
	&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  position: absolute;

  height: 90px;
  padding: 0 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid black;
  opacity: 0.7;
`;

export const ContentTitle = styled.span`
  margin-bottom: 6px;

  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;