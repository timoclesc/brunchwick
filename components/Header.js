import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

import styled from 'styled-components';
import { theme } from "../constants/Theme";
import { Paragraph } from "./Paragraph";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
`;

const ProfileImage = styled.div`
  max-width: 8rem;
  margin: 0 auto;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
`;

const Profile = ({ name, description, profilePicture }) => {
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
              <Heading as="h1" styles={{ marginBottom: '1rem' }}>
                <PrismicLink href="/">
                  <PrismicText field={name} />
                </PrismicLink>
              </Heading>
            )}
            {prismicH.isFilled.richText(description) && (
              <Paragraph>
                <PrismicText field={description} />
              </Paragraph>
            )}
          </div>
        )}
    </Wrapper>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}) => {
  return (
    <Bounded as="header" align="center">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center gap-10">
            <NavItem>
              <PrismicLink href="/">
                <PrismicText field={navigation.data.homepageLabel} />
              </PrismicLink>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withProfile && (
          <Profile
            name={settings.data.name}
            description={settings.data.description}
            profilePicture={settings.data.profilePicture}
          />
        )}
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  );
};
