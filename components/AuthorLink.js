import { PrismicLink } from "@prismicio/react";
import { useAuthor } from "../hooks/UseAuthors";
import Link from "next/link";

export const AuthorLink = ({ author }) => {
  const { authors } = useAuthor();
  const thisAuthor = authors.find((el) => el.id === author.id);
  return (
    thisAuthor && (
      <PrismicLink document={thisAuthor} internalComponent={Link}>
        {thisAuthor.data.name}
      </PrismicLink>
    )
  );
};
