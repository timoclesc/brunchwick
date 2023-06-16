import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import styled from "styled-components";

import { Heading } from "@/components/Heading";
import { Date } from "@/components/Date";
import { Tags } from "@/components/Tags";
import { Currency } from "@/components/Currency";
import { Rating } from "@/components/Rating";
import { Paragraph } from "@/components/Paragraph";
import { StackedImage } from "@/components/StackedImage";
import {
  findFirstImage,
  getExcerpt,
  getAverageRating,
  getAveragePrice,
} from "/helpers";

/* 
  Variants: vertical | horizontal
 */
const ArticleGrid = styled.li`
  display: grid;
  background: ${(props) => props.theme.lightTheme.cardBackground};
  gap: ${(props) => `${props.theme.spacers.md} ${props.theme.spacers.xlg}`};
  padding: ${(props) => props.theme.sizes.md};

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    grid-template-columns: ${(props) =>
      props.layout === "horizontal" && props.hasFeaturedImage
        ? "5fr 4fr"
        : "1fr"};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xlg}px) {
    padding: ${(props) => props.theme.sizes.xlg};
  }
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Thumbnail = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    max-width: ${(props) => (props.variant === "compact" ? "14rem" : "auto")};
  }
`;

export const Article = ({ article, layout = "horizontal" }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = article.data.excerpt ?? getExcerpt(article.data.slices);

  const tags = article.tags;

  const rating = getAverageRating(article.data.slices);

  const avgPrice = getAveragePrice(article.data.slices);

  return (
    <ArticleGrid hasFeaturedImage={featuredImage} layout={layout}>
      {prismicH.isFilled.image(featuredImage) && (
        <PrismicLink document={article} tabIndex="-1">
          <Thumbnail>
            <StackedImage image={featuredImage} />
          </Thumbnail>
        </PrismicLink>
      )}
      <ArticleContent>
        <Heading as="h3" level={2}>
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Heading>
        {date && (
          <Date date={date} styles={{ marginInlineEnd: "1rem", order: -1 }} />
        )}
        {tags && (
          <Tags tags={tags} styles={{ order: -2, marginBottom: "1rem" }} />
        )}
        {excerpt && <Paragraph>{excerpt}</Paragraph>}
        {rating > 0 && (
          <Paragraph>
            {" "}
            Average Rating: <Rating value={rating} />
          </Paragraph>
        )}
        {avgPrice > 0 && (
          <Paragraph>
            {" "}
            Average Price: <Currency amount={avgPrice} />
          </Paragraph>
        )}
      </ArticleContent>
    </ArticleGrid>
  );
};
