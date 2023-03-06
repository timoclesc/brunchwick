import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { ArticleList } from "../components/ArticleList";
import { Article } from "../components/Article";
import { FeatureText } from "../components/FeatureText";
import { Heading } from "../components/Heading";
import { Hero } from "../components/Hero";
import { Button } from "../components/Button";

const Index = ({ articles, navigation, settings }) => {
  return (
    <Layout
      description={
        "Your one-stop-shop for where to eat and drink in Brunswick, Melbourne."
      }
      tileImage={settings.data.profilePicture}
      navigation={navigation}
      settings={settings}
    >
      <Head text={settings.data.intro} image={settings.data.homepage_hero}>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <Bounded size="fullbleed">
        {prismicH.isFilled.richText(settings.data.intro) && (
          <Hero
            text={settings.data.description}
            image={settings.data.homepage_hero}
          />
        )}
      </Bounded>
      <Bounded size="wide">
        <FeatureText text={settings.data.intro} />
      </Bounded>
      <Bounded size="widest"></Bounded>
      <Bounded size="fullbleed">
        <Heading as="h2" level={1} styles={{ marginBlockEnd: "2rem" }}>
          Latest reviews
        </Heading>
        <Heading as="p" level={4} styles={{ marginBlockEnd: "2rem" }}>
          What’s good around town at the moment
        </Heading>
        <ArticleList>
          {articles.map((article, index) => (
            <Article
              key={article.id}
              article={article}
              layout={index % 3 === 1 ? "vertical" : "horizontal"}
            />
          ))}
        </ArticleList>
        <Button as="a" field={settings.data.article_listing_page}>
          View all articles
        </Button>
      </Bounded>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      articles,
      navigation,
      settings,
    },
  };
}
