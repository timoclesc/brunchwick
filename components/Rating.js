import styled from "styled-components";

const Comp = styled.div((props) => ({
  color: props.theme.lightTheme.lightBody,
  fontStyle: "italic",
  ...props.styles,
}));

export const Rating = ({ value, styles, as = "span" }) => (
  <Comp as={as} styles={styles}>
    {Math.round(value * 100) / 100} / 10
  </Comp>
);
