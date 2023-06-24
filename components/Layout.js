import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import * as prismicH from "@prismicio/helpers";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  title,
  description,
  navigation,
  settings,
  tileImage,
  withSignUpForm,
  children,
}) => {
  const pageTitle = title
    ? `${title} | ${prismicH.asText(settings.data.name)}`
    : prismicH.asText(settings.data.name);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <NextSeo
        title={pageTitle}
        defaultTitle={prismicH.asText(settings.data.name)}
        description={description}
        canonical={`https://brunchwick.club${router.asPath !== '/' ? router.asPath : ''}`}
        openGraph={{
          url: `https://brunchwick.club${router.asPath !== '/' ? router.asPath : ''}`,
          title: pageTitle,
          description: description,
          type: router.asPath.includes("reviews/") ? "article" : "basic",
          ...(tileImage
            ? {
              images: [
                {
                  url: tileImage.url,
                  width: tileImage.dimensions.width,
                  height: tileImage.dimensions.height,
                  alt: tileImage.alt,
                  type: "image/jpeg",
                },
              ],
            }
            : {}),
          siteName: "Brunchwick",
        }}
      />
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      {/* Email signup form permenantly disabled */}
      <Footer withSignUpForm={false && withSignUpForm} settings={settings} />
    </div>
  );
};
