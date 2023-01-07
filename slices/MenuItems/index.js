import React from "react";

import * as prismicH from "@prismicio/helpers";
import { RichText } from "../../components/RichText";
import { Heading } from "../../components/Heading";
import { Bounded } from "../../components/Bounded";
import { Box } from "../../components/Box";
import { MenuItem } from "../../components/MenuItem";

/**
 * @typedef {import("@prismicio/client").Content.MenuItemSlice} MenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuItemSlice>} MenuItemProps
 * @param { MenuItemProps }
 */
const MenuItems = ({ slice }) => (
  <Bounded as="section">
    <Box>
      {prismicH.isFilled.keyText(slice.primary.title) && (
        <Heading as="h3" level={3}>
          {slice.primary.title}
        </Heading>
      )}
      {prismicH.isFilled.richText(slice.primary.description) && (
        <RichText field={slice.primary.description} />
      )}
      {/* Check to see if helper can null check */}
      {slice.items.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          rating={item.rating}
          review={item.review}
          reviewer={item.reviewer}
        />
      ))}
    </Box>
  </Bounded>
);

export default MenuItems;
