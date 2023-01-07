import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-block-end: ${(props) => props.marginBottom ?? props.theme.spacers.xlg};
`;

export const NavList = ({ marginBottom, children }) => {
  return (
    <List ariaRole="list" marginBottom={marginBottom}>
      {children}
    </List>
  );
};
