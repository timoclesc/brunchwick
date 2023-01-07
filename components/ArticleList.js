import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: ${(props) => props.theme.spacers.xlg};
  margin-block-end: ${(props) => props.theme.spacers.lg};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

export const ArticleList = ({ columns = 1, children }) => {
  return (
    <List ariaRole="list" columns={columns}>
      {children}
    </List>
  );
};
