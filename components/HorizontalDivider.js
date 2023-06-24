import styled from "styled-components";

const Hr = styled.hr((props) => ({
  backgroundColor: props.theme.lightTheme.cardBorder,
  height: 5,
  margin: "0 auto 1rem",
  maxWidth: props.theme.layout.maxWidthSm,
  position: "relative",
  width: props.width ?? "50%",
  ...props.styles,
}));

export const HorizontalDivider = ({ width, styles }) => {
  return <Hr width={width} styles={styles} />;
};
