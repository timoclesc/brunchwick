import styled from "styled-components";

import { PrismicRichText } from "@prismicio/react";
import { Border } from "./Border";
import { StackedImage } from "./StackedImage";

const Outer = styled.section`
  display: flex;
  align-items: center;
`;

const HeroImage = styled.div`
  width: 65%;
  position: relative;
`;

const TextBox = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 5% 2.5% 6% 5%;
  background-color: ${props => props.theme.darkTheme.background};
  color: ${props => props.theme.darkTheme.body};
  margin-left: -3rem;
  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
  line-height: 1.33;
  font-family: ${props => props.theme.fonts.display};
  font-weight: 400;

  em {
    color ${props => props.theme.lightTheme.heading};
    background-color ${props => props.theme.lightTheme.secondary};
    font-style: normal;
  }
`;



export const Hero = ({ text, image, }) => {
  return <Outer>
    <HeroImage>
      <StackedImage image={image} />
    </HeroImage>
    <TextBox>
      <Border />

      <PrismicRichText field={text} components={
        {
          paragraph: ({ children }) => (
            <p>
              {children}
            </p>
          )
        }} />
    </TextBox>
  </Outer>
}