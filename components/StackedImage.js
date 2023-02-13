import styled from "styled-components";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import BrandShapeOne from "./svg/bkg-shape-1.svg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.color || props.theme.colors.juniper};
  position: relative;
  padding: ${(props) => props.padding};
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
`;

const ImageContainer = styled.div`
  aspect-ratio: ${(props) => props.aspectRatio};
  overflow: hidden;
  width: 100%;
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const StackedImage = ({ aspectRatio, color, variant = 1, image }) => {
  const shapes = {
    1: <BrandShapeOne />,
  };

  const padding = {
    1: "1.5rem 0.5rem 1.875rem 2rem;",
  };

  return (
    <Container color={color} padding={padding[variant]}>
      <Background>{shapes[variant]}</Background>
      {prismicH.isFilled.image(image) && (
        <ImageContainer
          aspectRatio={
            aspectRatio || image.dimensions.width / image.dimensions.height
          }
        >
          <PrismicNextImage field={image} fill={true} />
        </ImageContainer>
      )}
    </Container>
  );
};
