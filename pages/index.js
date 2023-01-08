import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { ArticleList } from "../components/ArticleList";
import { Article } from "../components/Article";
import { RichText } from "../components/RichText";
import { HorizontalDivider } from "../components/HorizontalDivider";
import { Heading } from "../components/Heading";

const Index = ({ articles, navigation, settings }) => {
  return (
    <Layout
      description={'Your one-stop-shop for where to eat and drink in Brunswick, Melbourne.'}
      tileImage={settings.data.profilePicture}
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <Bounded size="widest">
        <RichText field={settings.data.intro} />
        <HorizontalDivider styles={{ marginBlock: "3rem" }} />
        <Heading as="h2" level={2} styles={{ marginBlockEnd: "2rem" }}>
          Latest reviews
        </Heading>
        <ArticleList>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ArticleList>
      </Bounded>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    limit: 4,
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
