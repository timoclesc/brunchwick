import styled from "styled-components";

import { Rating } from "@/components/Rating";
import { Currency } from "@/components/Currency";
import { Paragraph } from "./Paragraph";
import { AuthorLink } from "./AuthorLink";

const Outer = styled.div((props) => ({
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
  color: ${(props) => props.theme.lightTheme.accent};
`;

const Author = styled.div`
  color: ${(props) => props.theme.lightTheme.lightBody};
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
      {review && (
        <Paragraph styles={{ display: "inline", marginBlockEnd: 0 }}>
          {review}
        </Paragraph>
      )}
      {reviewer && (
        <Author>
          By <AuthorLink author={reviewer} />
        </Author>
      )}
    </Outer>
  );
};
