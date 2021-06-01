import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;

  width: 40vh;
  height: 40vh;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;
