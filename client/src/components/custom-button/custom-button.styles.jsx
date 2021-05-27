import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;


  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;

  display: flex;
  justify-content: center;

  padding: 0 25px 0 25px;

  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 50px;

  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  font-size: 15px;

  cursor: pointer;

  ${getButtonStyles}
`