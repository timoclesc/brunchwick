import MyComponent from "../../../../slices/Image";

export default {
  title: "slices/Image",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "image",
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.prismic.io/nextjs-starter-prismic-blog/bbde7d62-670b-4592-b76c-4047d0cf1635_jake-melara-Yh6K2eTr_FY-unsplash.jpg?w=900&h=500&fit=crop",
        },
        caption: [
          {
            type: "paragraph",
            text: "Commodo magna dolor est aute in enim do in minim excepteur pariatur duis culpa dolor. Fugiat non ipsum cupidatat proident velit aute Lorem cillum reprehenderit Lorem occaecat esse cillum. Aute aliqua dolor ad elit et.",
            spans: [],
          },
        ],
      },
      id: "_Default",
    }}
  />
);
_Default.storyName = "Default";

export const _Wide = () => (
  <MyComponent
    slice={{
      variation: "wide",
      name: "Wide",
      slice_type: "image",
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=900&h=500&fit=crop",
        },
        caption: [
          {
            type: "paragraph",
            text: "Elit sunt cillum deserunt in qui culpa anim veniam amet dolore consectetur pariatur magna dolor ex.",
            spans: [],
          },
        ],
      },
      id: "_Wide",
    }}
  />
);
_Wide.storyName = "Wide";
