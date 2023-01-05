import styled from 'styled-components';

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});


const Time = styled.time`
  color: ${props => props.theme.colors.plum};
`;

export const Date = ({ date }) => {
  return (
    <Time datetime={date}>
      {dateFormatter.format(date)}
    </Time>);
};