import styled from "styled-components";

import { PrismicRichText } from "@prismicio/react";
import { Border } from "./Border";
import { StackedImage } from "./StackedImage";

const Outer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: -${(props) => props.theme.spacers.lg};

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 65%;
  }
`;

const TextBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 5% 2.5% 6% 5%;
  background-color: ${(props) => props.theme.darkTheme.background};
  color: ${(props) => props.theme.darkTheme.body};

  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
  line-height: 1.33;
  font-family: ${(props) => props.theme.fonts.display};
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    width: 80%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    margin-left: -3rem;
    width: 50%;
  }

  em {
    color ${(props) => props.theme.lightTheme.heading};
    background-color ${(props) => props.theme.lightTheme.secondary};
    font-style: normal;
  }
`;

export const Hero = ({ text, image }) => {
  return (
    <Outer>
      <HeroImage>
        <StackedImage image={image} />
      </HeroImage>
      <TextBox>
        <Border />

        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => <p>{children}</p>,
          }}
        />
      </TextBox>
    </Outer>
  );
};
