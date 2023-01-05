import React from 'react'

import * as prismicH from "@prismicio/helpers";
import { RichText } from '../../components/RichText';
import { Heading } from '../../components/Heading';
import { Bounded } from '../../components/Bounded';


/**
 * @typedef {import("@prismicio/client").Content.MenuItemSlice} MenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuItemSlice>} MenuItemProps
 * @param { MenuItemProps }
 */
const MenuItem = ({ slice }) => (
  <Bounded as="section">
    <span className="title">
      {
        prismicH.isFilled.keyText(slice.primary.title) &&
        <Heading as="h3">
          {slice.primary.title}
        </Heading>
      }
    </span>
    {prismicH.isFilled.richText(slice.description.text) && (
      <RichText field={slice.primary.description} />
    )}
  </Bounded>

)

export default MenuItem