import styled, { useTheme } from "styled-components";

import { RichText } from "./RichText";
import { Heading } from "./Heading";
import { Border } from "./Border";

import EmptyBaguette from "./svg/empty-baguette.svg";
import BrandShape from "./svg/bkg-shape-2.svg";
import * as prismicH from "@prismicio/helpers";

const Outer = styled.section`
  position: relative;
  padding: 5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    padding: 10rem;
  }
`;

const TextContainer = styled.div`
  color: ${(props) => props.theme.lightTheme.heading};
  position: relative;
  z-index: 2;

  em {
    position: relative;
    font-style: normal;
    background-image: linear-gradient(
      to top,
      ${(props) => props.theme.darkTheme.body} 0%,
      ${(props) => props.theme.darkTheme.body} 100%
    );
    background-repeat: no-repeat;
    background-position: 0 90%;
    background-size: 100% 10px;
    transition: ${(props) =>
      `background-size ${props.theme.animation.easing} ${props.theme.animation.duration}`};
  }

  em:hover {
    background-size: 100% 90%;
  }
`;

const BaguetteWrapper = styled.div`
  position: absolute;
  height: auto;
  right: 1rem;
  top: -1rem;
  width: 5rem;
  color: ${(props) => props.theme.lightTheme.heading};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    width: 10rem;
    right: 5rem;
    top: 5rem;
  }
`;

export const FeatureText = ({ heading, text, svg = "baguette" }) => {
  const theme = useTheme();

  const shapes = {
    baguette: <EmptyBaguette style={{ width: "100%", height: "auto" }} />,
    none: "",
  };

  return (
    <Outer>
      <BrandShape
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          color: theme.lightTheme.accent,
        }}
      />
      <BaguetteWrapper>{shapes[svg]}</BaguetteWrapper>
      <Border
        color={theme.lightTheme.heading}
        styles={{ inset: "3rem", width: "auto", height: "auto" }}
      />
      <TextContainer>
        {typeof heading === "string"
          ? prismicH.isFilled.keyText(heading) && (
              <Heading as={"h2"} level={2}>
                {heading}
              </Heading>
            )
          : prismicH.isFilled.richText(heading) && <RichText field={heading} />}
        <RichText field={text} />
      </TextContainer>
    </Outer>
  );
};
