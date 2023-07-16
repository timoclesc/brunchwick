import * as prismicH from "@prismicio/helpers";
import slugify from "slugify";

export const getAverageRating = (slices) => {
  const ratingSlices = slices.find((slice) => slice.slice_type === "menu_item");
  const total = [];

  ratingSlices &&
    ratingSlices.items.forEach((item) => {
      if (item && prismicH.isFilled.keyText(item.rating)) {
        total.push(parseFloat(item.rating));
      }
    });

  return total.length
    ? total.reduce((sum, cur) => sum + cur) / total.length
    : 0;
};

export const getAveragePrice = (slices) => {
  const ratingSlices = slices.find((slice) => slice.slice_type === "menu_item");
  const total = [];

  ratingSlices &&
    ratingSlices.items.forEach((item) => {
      if (item && prismicH.isFilled.keyText(item.price)) {
        total.push(parseFloat(item.price));
      }
    });

  return total.length
    ? total.reduce((sum, cur) => sum + cur) / total.length
    : 0;
};

export const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

export const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

export const makeSlug = (text) => slugify(text, { lower: true, strict: true });
