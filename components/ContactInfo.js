import styled from "styled-components";
import { Paragraph } from "./Paragraph";
import { PrismicLink } from "@prismicio/react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContactInfo = ({ website, googleMaps }) => (
  <Container>
    {website && (
      <Paragraph>
        <PrismicLink
          field={website}
          target="_self"
          style={{ textDecoration: "underline" }}
        >
          Website
        </PrismicLink>
      </Paragraph>
    )}
    {googleMaps && (
      <Paragraph>
        <PrismicLink
          field={googleMaps}
          target="_self"
          style={{ textDecoration: "underline" }}
        >
          Google Maps
        </PrismicLink>
      </Paragraph>
    )}
  </Container>
);
