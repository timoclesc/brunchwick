import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: ${props => props.theme.spacers.xlg};
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  margin-block-end: ${props => props.theme.spacers.lg};
`;

export const ArticleList = ({ columns = 1, children }) => {
  return (
    <List ariaRole="list" columns={columns}>{children}</List>
  );
};