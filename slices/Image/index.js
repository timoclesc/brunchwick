import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";

import styled from "styled-components";

const Figure = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacers.sm};

  & img {
    max-width: 100%;
    height: auto;
  }

  & figcaption {
    text-align: center;
    color: ${(props) => props.theme.colors.charcoal};
  }
`;

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      size={slice.variation === "wide" ? "fullbleed" : "widest"}
    >
      <Figure>
        {prismicH.isFilled.image(image) && (
          <div>
            <PrismicNextImage field={image} sizes="100vw" />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption>
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </Figure>
    </Bounded>
  );
};

export default Image;
