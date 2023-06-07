import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  margin: 30px;
  padding: 15px;
  width: 300px;
  border: 2px solid black;
  ${props => props.filterForm}
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-bottom: 25px;
  width: 150px;
  ${props => props.inputFilter}
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  padding: 0.25em 1em;
  text-transform: capitalize;
  ${props => props.buttonListStyle};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    scale: 1.01;
  }
`;
