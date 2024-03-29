import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ArticleList } from "@/components/ArticleList";
import { Article } from "@/components/Article";
import { HorizontalDivider } from "@/components/HorizontalDivider";
import { Banner } from "@/components/Banner";
import { Button } from "@/components/Button";
import { AuthorProvider } from "../../hooks/UseAuthors";
import { ContactInfo } from "@/components/ContactInfo";
import { findFirstImage } from "/helpers";

const ArticlePage = ({
  article,
  latestArticles,
  navigation,
  settings,
  authors,
}) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);

  return (
    <Layout
      title={prismicH.asText(article.data.title)}
      description={article.data.excerpt}
      tileImage={featuredImage}
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <AuthorProvider authors={authors}>
        <article>
          <Banner title={article.data.title} date={date} tags={article.tags} />
          <Bounded wrapperStyles={{ paddingBlock: 0 }}>
            <ContactInfo
              googleMaps={article.data.google_maps}
              website={article.data.website}
            />
          </Bounded>
          <SliceZone slices={article.data.slices} components={components} />
        </article>
        <HorizontalDivider width="100%" />
        {latestArticles.length > 0 && (
          <Bounded size="widest">
            <Heading as="h2" level={2} styles={{ marginBlockEnd: "2rem" }}>
              Latest reviews
            </Heading>
            <ArticleList>
              {latestArticles.map((article, index) => (
                <Article
                  key={article.id}
                  article={article}
                  layout={index % 3 === 1 ? "vertical" : "horizontal"}
                />
              ))}
            </ArticleList>
            <Bounded
              as="div"
              size="widest"
              wrapperStyles={{ paddingBlock: 0 }}
              innerStyles={{ textAlign: "left" }}
            >
              {/* Come back to this */}
              <Button
                as="a"
                field={settings.data.article_listing_page}
                isReversed={true}
              >
                View all reviews
              </Button>
            </Bounded>
          </Bounded>
        )}
      </AuthorProvider>
    </Layout>
  );
};

export default ArticlePage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const authors = await client.getAllByType("author");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      article,
      latestArticles,
      navigation,
      settings,
      authors,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: [...articles.map((article) => prismicH.asLink(article))],
    fallback: false,
  };
}
