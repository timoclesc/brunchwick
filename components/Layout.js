import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  title,
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div>
      {title && (
        <Head>
          <title>{`${title} | ${prismicH.asText(settings.data.name)}`}</title>
        </Head>
      )}
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
