import styled from "styled-components";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Time = styled.time((props) => ({
  color: props.theme.colors.grey,
  ...props.styles,
}));

export const Date = ({ date, styles }) => {
  return (
    <Time datetime={date} styles={styles}>
      {dateFormatter.format(date)}
    </Time>
  );
};
