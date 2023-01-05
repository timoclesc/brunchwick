import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { richTextComponents } from "../components/RichText";

import { theme } from "../constants/Theme";

import "../styles/globals.css";

import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      richTextComponents={richTextComponents}
    >
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            background: theme.colors.cottonSeed,
            padding: "1rem",
            textAlign: "center",
            fontSize: "0.85rem",
            color: theme.colors.black,
            textTransform: "uppercase",
          }}
        >
          <p>
            <strong>ENV: {process.env.NODE_ENV}</strong>
          </p>
        </div>
      )}
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
