import styled from "styled-components";

const Comp = styled.div(props => {
  var fontSize;

  switch (props.as) {
    case "h1":
      fontSize = props.theme.sizes.xlg;
      break;
    case "h2":
      fontSize = props.theme.sizes.lg;
      break;
    default:
      fontSize = props.theme.sizes.md;
      break;
  }

  return {
    fontSize: fontSize,
    margin: 0,
    marginBlockEnd: props.marginBottom || 0,
    color: props.theme.colors.black,
    fontFamily: props.theme.fonts.display,
    ...props.styles
  };
});

export const Heading = ({ as = "h1", children, styles }) => {
  return (
    <Comp as={as} styles={styles}>
      {children}
    </Comp>
  );
};
