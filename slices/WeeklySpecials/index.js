import React from "react";
import { Bounded } from "../../components/Bounded";
import { WeeklySpecials as Slice } from "../../components/WeeklySpecials";

/**
 * @typedef {import("@prismicio/client").Content.WeeklySpecialsSlice} WeeklySpecialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WeeklySpecialsSlice>} WeeklySpecialsProps
 * @param { WeeklySpecialsProps }
 */
const WeeklySpecials = ({ slice }) => (
  <Bounded>
    <Slice slice={slice} />
  </Bounded>
);

export default WeeklySpecials;
