import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Heading } from "./Heading";

import styled from 'styled-components';
import { theme } from '../constants/Theme';

import { Paragraph } from "./Paragraph";

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

const ProfileImage = styled.div`
  max-width: 8rem;
  margin: 0 auto;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
`;

export const Profile = ({ name, description, profilePicture }) => {
  return (
    <Wrapper>
      <PrismicLink href="/" tabIndex="-1">
        <ProfileImage>
          {prismicH.isFilled.image(profilePicture) && (
            <PrismicNextImage
              field={profilePicture}
              fill={true}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                inset: '0',
              }}
            />
          )}
        </ProfileImage>
      </PrismicLink>
      {(prismicH.isFilled.richText(name) ||
        prismicH.isFilled.richText(description)) && (
          <div>
            {prismicH.isFilled.richText(name) && (
              <Heading as="h1" styles={{ marginBottom: '0.625rem' }}>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <Paragraph styles={{ color: theme.colors.charcoal }}>
                <PrismicText field={description} />
              </Paragraph>
            )}
          </div>
        )}
    </Wrapper>
  );
};
