import Head from "next/head";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'

import * as prismicH from "@prismicio/helpers";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  title,
  description,
  tileImage,
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  const pageTitle = title ? `${title} | ${prismicH.asText(settings.data.name)}` : prismicH.asText(settings.data.name);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <NextSeo
        title={pageTitle}
        defaultTitle={prismicH.asText(settings.data.name)}
        description={description}
        canonical={`https://brunchwick.club${router.asPath}`}
        openGraph={{
          url: `https://brunchwick.club${router.asPath}`,
          title: pageTitle,
          description: description,
          type: router.asPath.includes('reviews/') ? 'article' : 'basic',
          ...tileImage ?
            {
              images: [
                {
                  url: tileImage.url,
                  width: tileImage.dimensions.width,
                  height: tileImage.dimensions.height,
                  alt: tileImage.alt,
                  type: 'image/jpeg',
                },
              ]
            } : {},
          siteName: 'Brunchwick.club',
        }}
      />
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      {/* Email signup form permenantly disabled */}
      <Footer withSignUpForm={false && withSignUpForm} settings={settings} />
    </div>
  );
};
