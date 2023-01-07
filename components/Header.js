import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import { Bounded } from "./Bounded";
import { Profile } from "./Profile";
import { NavItem } from "./NavItem";
import { NavList } from "./NavList";
import { HorizontalDivider } from "./HorizontalDivider";

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}) => {
  return (
    <Bounded as="header" align="center">
      <nav>
        <NavList marginBottom={withProfile ? "3rem" : 0}>
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
        </NavList>
      </nav>
      {withProfile && (
        <Profile
          name={settings.data.name}
          description={settings.data.description}
          profilePicture={settings.data.profilePicture}
        />
      )}
      {withDivider && <HorizontalDivider styles={{ marginTop: "3rem" }} />}
    </Bounded>
  );
};
