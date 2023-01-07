import MyComponent from "../../../../slices/MenuItems";

export default {
  title: "slices/MenuItems",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      version: "sktwi1xtmkfgx8626",
      items: [
        {
          name: "Long Black",
          price: 91,
          rating: 81,
          review: "food",
          reviewer: {
            id: "mock_document_id",
            link_type: "Document",
            type: "author",
            tags: [],
            lang: "en-us",
            slug: null,
            first_publication_date: "1970-01-01T00:00:01+0000",
            last_publication_date: "1970-01-01T01:00:00+0000",
          },
        },
      ],
      primary: {
        title: "Wednesday Brunch deal",
        description: [
          {
            type: "paragraph",
            text: "Nulla esse sit Lorem. Voluptate minim non esse duis labore ad.",
            spans: [],
          },
        ],
      },
      id: "_Default",
      slice_type: "menu_item",
    }}
  />
);
_Default.storyName = "";
