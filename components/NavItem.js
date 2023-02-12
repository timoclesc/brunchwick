import styled from "styled-components";

const ListItem = styled.li(props => ({
  fontWeight: 400,
  letterSpacing: '-0.025em',
  paddingInline: '0.5rem',
  ...props.styles
}));

export const NavItem = ({ children, styles }) => {
  return <ListItem styles={styles}>{children}</ListItem>;
};
