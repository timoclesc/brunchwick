import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";

import { Bounded } from "./Bounded";
import { NavItem } from "./NavItem";
import { NavList } from "./NavList";

import Logo from "./Logo";

export const Header = ({ navigation }) => {
  return (
    <>
      <Bounded as="header" align="center">
        <nav>
          <NavList>
            <NavItem styles={{ width: "100%", paddingBlockEnd: "1rem" }}>
              <PrismicLink href="/">
                <Logo />
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
      </Bounded>
    </>
  );
};
