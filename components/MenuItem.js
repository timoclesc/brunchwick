import styled from "styled-components";

import { Rating } from "../components/Rating";
import { Currency } from "../components/Currency";
import { Paragraph } from "./Paragraph";
import { AuthorLink } from "./AuthorLink";

const Outer = styled.div((props) => ({
  backgroundColor: props.theme.colors.lightGrey,
  paddingBlock: props.theme.spacers.md,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: props.theme.spacers.xs,
  ...props.styles,
}));

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.mono};
`;

const Author = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-style: italic;
`;

export const MenuItem = ({ name, price, rating, review, reviewer }) => {
  return (
    <Outer>
      <Meta>
        <Title>{name}</Title>
        <Currency amount={price} />
      </Meta>
      {rating && <Rating value={rating} />}
      {review && <Paragraph styles={{ marginBlockEnd: 0 }}>{review}</Paragraph>}
      {reviewer && (
        <Author>
          By <AuthorLink author={reviewer} />
        </Author>
      )}
    </Outer>
  );
};
