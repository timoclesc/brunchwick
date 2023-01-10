import styled from "styled-components";

const Comp = styled.div((props) => {
  var fontSize;

  switch (props.level) {
    case 1:
      fontSize = props.theme.sizes.xlg;
      break;
    case 2:
      fontSize = props.theme.sizes.lg;
      break;
    default:
      fontSize = props.theme.sizes.md;
      break;
  }

  return {
    fontSize: fontSize,
    margin: 0,
    marginBlockEnd: props.styles?.marginBottom || props.theme.spacers.sm,
    color: props.theme.lightTheme.heading,
    fontFamily: props.theme.fonts.display,
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
