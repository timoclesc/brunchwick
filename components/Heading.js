import styled from "styled-components";

const Comp = styled.div((props) => {
  const fontSize = {
    1: props.theme.sizes.xlg,
    2: props.theme.sizes.lg,
    3: props.theme.sizes.md,
    4: props.theme.sizes.sm,
  };

  const fontWeight = {
    1: 700,
    2: 700,
    3: 400,
    4: 400,
  };

  return {
    fontSize: fontSize[props.level] || "2rem",
    margin: 0,
    marginBlockEnd: props.styles?.marginBottom || props.theme.spacers.sm,
    color: props.theme.lightTheme.heading,
    fontFamily: props.theme.fonts.display,
    fontWeight: fontWeight[props.level] || 700,
    ...props.styles,
  };
});

export const Heading = ({ as = "h1", level = 1, children, styles }) => {
  return (
    <Comp as={as} level={level} styles={styles}>
      {children}
    </Comp>
  );
};
