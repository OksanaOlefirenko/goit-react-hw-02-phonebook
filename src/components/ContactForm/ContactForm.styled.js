import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  border-radius: 5px;
  padding: 10px;
  background-color: blueviolet;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: white;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: yellowgreen;
    color: white;
  }
`;
