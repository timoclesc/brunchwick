import styled from "styled-components";

const Comp = styled.div((props) => {
  return {
    backgroundColor: props.theme.colors.lightGrey,
    borderRadius: "0.5rem",
    padding: props.theme.spacers[props.paddingSize] ?? props.theme.spacers.md,
    ...props.styles,
  };
});

export const Box = ({ as, paddingSize = "md", styles, children }) => (
  <Comp as={as} styles={styles} paddingSize={paddingSize}>
    {children}
  </Comp>
);
