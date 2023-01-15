import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import styled from "styled-components";

import { Heading } from "../components/Heading";
import { Date } from "../components/Date";
import { Tags } from "../components/Tags";
import { Paragraph } from "./Paragraph";
import { findFirstImage, getExcerpt } from "/helpers";

const ArticleGrid = styled.li`
  display: grid;
  gap: ${(props) => props.theme.spacers.md};

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    grid-template-columns: ${(props) =>
      props.variant === "compact"
        ? "1fr"
        : props.hasFeaturedImage
        ? "1fr 4fr"
        : "1fr"};
  }
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    max-width: ${(props) => (props.variant === "compact" ? "14rem" : "auto")};
  }
`;

const Meta = styled.div`
  display: ${(props) => (props.variant === "default" ? "flex" : "grid")};
  gap: ${(props) => props.theme.spacers.xs};
  justify-content: space-between;
  order: ${(props) => (props.variant === "compact" ? "auto" : "-1")};
  margin-block-end: ${(props) => props.theme.spacers.xs};
`;

export const Article = ({ article, variant = "deafult" }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = article.data.excerpt ?? getExcerpt(article.data.slices);

  const tags = article.tags;

  return (
    <ArticleGrid hasFeaturedImage={featuredImage} variant={variant}>
      {prismicH.isFilled.image(featuredImage) && variant !== "compact" && (
        <PrismicLink document={article} tabIndex="-1">
          <Thumbnail>
            <PrismicNextImage
              field={featuredImage}
              fill={true}
              style={{
                objectFit: "cover",
                position: "absolute",
                inset: "0",
                width: "100%",
                height: "100%",
              }}
            />
          </Thumbnail>
        </PrismicLink>
      )}
      <ArticleContent>
        <Heading as="h3" level={variant === "compact" ? 3 : 2}>
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Heading>
        {(date || tags) && (
          <Meta variant={variant}>
            {date && <Date date={date} styles={{ marginInlineEnd: "1rem" }} />}
            {tags && <Tags tags={tags} />}
          </Meta>
        )}
        {excerpt && <Paragraph>{excerpt}</Paragraph>}
      </ArticleContent>
    </ArticleGrid>
  );
};
