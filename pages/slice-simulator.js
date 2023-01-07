import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";

import state from "../.slicemachine/libraries-state.json";
import { components } from "../slices";
import { AuthorProvider } from "../hooks/UseAuthors";
import { ReviewProvider } from "../hooks/UseReviews";

const SliceSimulatorPage = ({ authors, reviews }) => (
  <AuthorProvider authors={authors}>
    <ReviewProvider reviews={reviews}>
      <SliceSimulator
        // The "sliceZone" prop should be a function receiving slices and rendering them using your "SliceZone" component.
        sliceZone={(props) => <SliceZone {...props} components={components} />}
        state={state}
      />
    </ReviewProvider>
  </AuthorProvider>
);

export default SliceSimulatorPage;

export const getStaticProps = async () => {
  const client = createClient();
  const authors = await client.getAllByType("author");
  const reviews = await client.getAllByType("review");

  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  } else {
    return {
      props: {
        authors: authors,
        reviews: reviews,
      },
    };
  }
};
