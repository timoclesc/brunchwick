import styled from "styled-components";

const Outer = styled.div((props) => ({
  width: "auto",
  height: "auto",
  position: "absolute",
  inset: "0.5rem",
  zIndex: 2,
  color: props.color || props.theme.lightTheme.accent,
  transition: `transform ${props.theme.animation.duration} ${props.theme.animation.ease}`,
  transform: "rotate(1.5deg)",
  ...props.styles,
}));

const VerticalLine = styled.div`
  width: 4px;
  height: calc(100% + 1rem);
  position: absolute;
  left: 0;
  top: -0.5rem;
  background-color: currentColor;

  &:first-child {
    right: 0;
    top: 0;
    left: auto;
  }
`;

const HorizontalLine = styled.div`
  width: calc(100% + 1rem);
  height: 4px;
  position: absolute;
  top: 0;
  left: -0.5rem;
  background-color: currentColor;

  &:last-child {
    bottom: 0;
    top: auto;
    left: -0.75rem;
  }
`;

export const Border = ({ color, styles }) => {
  // TODO: Figure out how to keep line width consistent
  return (
    <Outer color={color} styles={styles} aria-hidden={true}>
      <VerticalLine />
      <VerticalLine />
      <HorizontalLine />
      <HorizontalLine />
    </Outer>
  );
};
