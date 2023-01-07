import styled from "styled-components";

const Outer = styled.div((props) => ({
  padding: "3rem 2rem",
  ...props.styles,
}));

const Inner = styled.div((props) => {
  var maxWidth;

  switch (props.size) {
    case "fullbleed":
      maxWidth = props.theme.layout.maxWidthXlg;
      break;
    case "widest":
      maxWidth = props.theme.layout.maxWidthLg;
      break;
    case "base":
    default:
      maxWidth = props.theme.layout.maxWidthSm;
      break;
  }

  return {
    maxWidth: maxWidth,
    margin: "0 auto",
    textAlign: props.align,
    ...props.styles,
  };
});

export const Bounded = ({
  as = "section",
  size = "base",
  align = "left",
  children,
  wrapperStyles,
  innerStyles,
}) => {
  return (
    <Outer as={as} styles={wrapperStyles}>
      <Inner align={align} styles={innerStyles} size={size}>
        {children}
      </Inner>
    </Outer>
  );
};
