import styled from "styled-components";
import Background from "./svg/tag.svg";
import { PrismicLink } from "@prismicio/react";

const TagContainer = styled.div`
  font-size: 1rem;
  padding: 0.375rem 1.25rem 0.625rem;
  color: ${(props) => props.theme.lightTheme.heading};
  border-radius: 0.5rem;
  position: relative;

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const TextWrapper = styled.span`
  position: relative;
  z-index: 2;
`;

export const Tag = ({ children }) => {
  return (
    <TagContainer>
      {/* TODO: Make this so it isn't hardcoded */}
      <PrismicLink href={`/reviews/?tag=${children}`} tabIndex="-1">
        <Background />
        <TextWrapper>{children}</TextWrapper>
      </PrismicLink>
    </TagContainer>
  );
};
