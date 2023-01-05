import styled from 'styled-components';

const ListItem = styled.li`
  color: ${props => props.theme.colors.charcoal};
  font-weight: 400;
  letter-spacing: -0.025em;
  padding-inline: 0.5rem;
`;

export const NavItem = ({ children }) => {
  return (
    <ListItem>{children}</ListItem>
  );
};