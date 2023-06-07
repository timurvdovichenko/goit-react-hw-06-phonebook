import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 15px;
  margin-top: 0;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  padding: 3px;
`;

export const Span = styled.span`
  margin-bottom: 10px;
`;
