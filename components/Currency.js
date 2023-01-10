import styled from "styled-components";

const Comp = styled.div((props) => ({
  fontFamily: props.theme.fonts.mono,
  color: props.theme.lightTheme.body,
  ...props.styles,
}));

const formatNumber = (number) => {
  const dollar = (Math.round(number * 100) / 100).toFixed(2);
  return `$${dollar}`;
};

export const Currency = ({ amount, styles, as = "span" }) => (
  <Comp as={as} styles={styles}>
    {formatNumber(amount)}
  </Comp>
);
