import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: ${(props) => props.theme.spacers.xlg};
  margin-block-end: ${(props) => props.theme.spacers.lg};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);

    > :nth-child(6n + 1),
    > :nth-child(6n + 3),
    > :nth-child(6n + 5),
    > :nth-child(6n) {
      grid-column: span 2;
    }

    > :nth-child(6n) {
      margin-inline: -1rem 1rem;
    }

    > :nth-child(6n + 3) {
      margin-inline: 1rem -1rem;
    }

    > :nth-child(6n + 2) {
      margin-block: 1rem -1rem;
    }

    > :nth-child(6n + 4) {
      margin-block: -1rem 1rem;
    }

    > :nth-child(6n + 2),
    > :nth-child(6n + 4) {
      grid-row: span 2;
    }
  }
`;

export const ArticleList = ({ children }) => {
  return <List ariaRole="list">{children}</List>;
};
