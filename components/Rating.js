import styled from "styled-components";

const Comp = styled.div((props) => ({
  color: props.theme.lightTheme.lightBody,
  fontStyle: "italic",
  ...props.styles,
}));

export const Rating = ({ value, styles, as = "span" }) => (
  <Comp as={as} styles={styles}>
    {value} / 10
  </Comp>
);
