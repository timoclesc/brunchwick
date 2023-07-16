import { Bounded } from "@/components/Bounded";
import { Date } from "@/components/Date";
import { RichText } from "@/components/RichText";
import { Tags } from "@/components/Tags";

export const Banner = ({ title, date, tags }) => (
  <Bounded align="center">
    <RichText as="h1" field={title} styles={{ order: -1 }} />
    {tags?.length > 0 ? (
      <Tags
        tags={tags}
        styles={{ justifyContent: "center", marginBottom: "1rem" }}
      />
    ) : undefined}
    {date && <Date date={date} />}
  </Bounded>
);
