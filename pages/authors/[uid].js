import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { Bounded } from "../../components/Bounded";
import { Profile } from "../../components/Profile";
import { Heading } from "../../components/Heading";
import { ArticleList } from "../../components/ArticleList";
import { Article } from "../../components/Article";

import { RichText } from "../../components/RichText";
import { AuthorProvider } from "../../hooks/UseAuthors";
import { Paragraph } from "../../components/Paragraph";

const AuthorPage = ({
  author,
  latestArticles,
  navigation,
  settings,
  authors,
}) => {
  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <AuthorProvider authors={authors}>
        <Head>
          <title>
            {author.data.name} | {prismicH.asText(settings.data.name)}
          </title>
        </Head>
        <article>
          <Bounded align="center" wrapperStyles={{ paddingTop: 0 }}>
            <Heading as="h1" level={1}>
              {author.data.name}
            </Heading>
            <Profile profilePicture={author.data.profile} />
            <Paragraph
              styles={{
                marginBlock: "1rem",
                fontSize: "1.2rem",
                fontStyle: "italic",
              }}
            >
              {author.data.byline}
            </Paragraph>
            <div style={{ textAlign: "left" }}>
              {prismicH.isFilled.richText(author.data.bio) && (
                <RichText field={author.data.bio} />
              )}
            </div>
          </Bounded>
        </article>
        {latestArticles.length > 0 && (
          <Bounded size="widest">
            <Heading as="h2" level={2} styles={{ marginBlockEnd: "2rem" }}>
              Latest reviews
            </Heading>
            <ArticleList columns={2}>
              {latestArticles.map((article, index) => (
                <Article
                  key={article.id}
                  article={article}
                  layout={index % 3 === 1 ? "vertical" : "horizontal"}
                />
              ))}
            </ArticleList>
          </Bounded>
        )}
      </AuthorProvider>
    </Layout>
  );
};

export default AuthorPage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const author = await client.getByUID("author", params.uid);
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
      author,
      authors,
      latestArticles,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const authors = await client.getAllByType("author");

  return {
    paths: authors.map((author) => prismicH.asLink(author)),
    fallback: false,
  };
}
