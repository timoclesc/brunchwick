import styled from "styled-components";

const Para = styled.p((props) => ({
  marginBlockEnd: props.theme.spacers.sm,
  fontFamily: props.theme.fonts.serif,
  fontWeight: 300,
  lineHeight: 1.75,
  fontSize: props.theme.sizes.sm,
  ...props.styles,

  ["&:last-child"]: {
    marginBlockEnd: 0,
  },
}));

export const Paragraph = ({ as = "p", children, styles }) => {
  return (
    <Para as={as} styles={styles}>
      {children}
    </Para>
  );
};
