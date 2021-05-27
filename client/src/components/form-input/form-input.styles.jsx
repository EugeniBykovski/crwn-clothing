import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  display: block;

  width: 100%;
  margin: 25px 0;
  padding: 10px 10px 10px 5px;

  background: none;
  background-color: white;
  color: ${subColor};

  font-size: 18px;

  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  position: absolute;

  left: 5px;
  top: 10px;

  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;

  transition: 300ms ease all;
  
  &.shrink {
    ${shrinkLabelStyles}
  }
`;