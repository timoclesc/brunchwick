import React from "react";

import styled from "styled-components";

import { useReview } from "../../hooks/UseReviews";
import { Article } from "@/components/Article";
import { ArticleList as List } from "@/components/ArticleList";
import { Bounded } from "@/components/Bounded";
import { Paragraph } from "@/components/Paragraph";
import { RichText } from "@/components/RichText";
import { useSearchParams } from "next/navigation";

const CopyContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 2rem;
`;

/**
 * @typedef {import("@prismicio/client").Content.ArticleListSlice} ArticleListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleListSlice>} ArticleListProps
 * @param { ArticleListProps }
 */
const ArticleList = ({ slice }) => {
  const { reviews } = useReview();
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag");

  return (
    <Bounded as="section" size="widest">
      <CopyContainer>
        {slice.primary.title && <RichText field={slice.primary.title} />}
        {slice.primary.description && (
          <RichText field={slice.primary.description} />
        )}
      </CopyContainer>
      <List>
        {reviews.length > 0 ? (
          reviews
            .filter((article) => (tag && article.tags.includes(tag)) ?? true)
            .map((article, index) => (
              <Article
                key={article.id}
                article={article}
                layout={[1, 3].includes(index % 6) ? "vertical" : "horizontal"}
              />
            ))
        ) : (
          <Paragraph>
            {"Uh oh, it doesn't seem like we've got any reviews at the moment."}
          </Paragraph>
        )}
      </List>
    </Bounded>
  );
};

export default ArticleList;
