import styled from "styled-components";

const Hr = styled.hr((props) => ({
  width: props.width ?? "50%",
  height: 1,
  margin: "0 auto 1rem",
  maxWidth: props.theme.layout.maxWidthSm,
  backgroundColor: props.theme.lightTheme.cardBorder,
  ...props.styles,
}));

export const HorizontalDivider = ({ width, styles }) => {
  return <Hr width={width} styles={styles} />;
};
