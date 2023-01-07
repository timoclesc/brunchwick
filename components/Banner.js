import { Bounded } from "../components/Bounded";
import { RichText } from "../components/RichText";
import { Date } from "../components/Date";

export const Banner = ({ title, date }) => (
  <Bounded align="center">
    <RichText as="h1" field={title} />
    {date && <Date date={date} />}
  </Bounded>
);
