import MyComponent from "../../../../slices/ArticleList";

export default {
  title: "slices/ArticleList",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      version: "sktwi1xtmkfgx8626",
      items: [{}],
      primary: {
        title: [{ type: "heading2", text: "Willing", spans: [] }],
        description: [
          {
            type: "paragraph",
            text: "Duis eu consequat elit dolore sit. Non cupidatat do Lorem magna ea dolore et duis ad magna voluptate. Commodo veniam veniam consectetur officia sunt reprehenderit commodo nisi reprehenderit minim elit irure cillum laboris velit.",
            spans: [],
          },
        ],
      },
      id: "_Default",
      slice_type: "article_list",
    }}
  />
);
_Default.storyName = "";

export const _Compact = () => (
  <MyComponent
    slice={{
      variation: "compact",
      version: "sktwi1xtmkfgx8626",
      items: [{}],
      primary: {
        title: [{ type: "heading2", text: "Famous", spans: [] }],
        description: [
          {
            type: "paragraph",
            text: "Dolore tempor non proident labore nostrud officia aliquip tempor tempor anim.",
            spans: [],
          },
        ],
      },
      id: "_Compact",
      slice_type: "article_list",
    }}
  />
);
_Compact.storyName = "";
