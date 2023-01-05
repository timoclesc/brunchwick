import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import styled from 'styled-components';

import { Heading } from "../components/Heading";
import { Date } from "../components/Date";
import { Paragraph } from "./Paragraph";


const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

const ArticleGrid = styled.li`
  display: ${props => props.type === 'compact' ? 'block' : 'grid'};
  grid-template-columns: ${props => props.hasFeaturedImage ? '1fr 4fr' : '4fr 1fr'};
  gap: ${props => props.theme.spacers.md};
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Thumbnail = styled.div`
  width: 100%;
  max-width: 14rem;
  aspect-ratio: 1;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;


export const Article = ({ article, type = 'full' }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = article.data.excerpt ?? getExcerpt(article.data.slices);

  return (
    <ArticleGrid hasFeaturedImage={featuredImage} type={type}>
      {
        prismicH.isFilled.image(featuredImage) && type === 'full' &&
        <PrismicLink document={article} tabIndex="-1">
          <Thumbnail>
            <PrismicNextImage
              field={featuredImage}
              fill={true}
              style={{
                objectFit: 'cover',
                position: 'absolute',
                inset: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </Thumbnail>
        </PrismicLink>
      }
      <ArticleContent>
        <Heading as="h2">
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Heading>
        {date && <Date date={date} styles={{ order: -1 }} />}
        {excerpt && (
          <Paragraph>
            {excerpt}
          </Paragraph>
        )}
      </ArticleContent>
    </ArticleGrid>
  );
};