import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { AuthorProvider } from "../hooks/UseAuthors";
import { ReviewProvider } from "../hooks/UseReviews";
import { getExcerpt } from "helpers";

const Page = ({ page, navigation, settings, authors, reviews }) => {
  const excerpt = getExcerpt(page.data.slices);
  return (
    <AuthorProvider authors={authors}>
      <ReviewProvider reviews={reviews}>
        <Layout
          title={prismicH.asText(page.data.title)}
          description={excerpt}
          navigation={navigation}
          settings={settings}
          withProfile={!page.data.hide_banner}
          withHeaderDivider={!page.data.hide_banner}
        >
          <Banner title={page.data.title} />
          <SliceZone slices={page.data.slices} components={components} />
        </Layout>
      </ReviewProvider>
    </AuthorProvider>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const reviews = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const authors = await client.getAllByType("author");

  return {
    props: {
      page,
      navigation,
      settings,
      authors,
      reviews,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
