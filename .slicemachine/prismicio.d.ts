// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
    /**
     * Title field in *Article*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the article
     * - **API ID Path**: article.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Publish Date field in *Article*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Date the article was published
     * - **API ID Path**: article.publishDate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishDate: prismicT.DateField;
    /**
     * Featured Image field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.featuredImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featuredImage: prismicT.ImageField<never>;
    /**
     * Excerpt field in *Article*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.excerpt
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    excerpt: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Article*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: article.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticleDocumentDataSlicesSlice>;
    /**
     * Google Maps field in *Article*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: article.google_maps
     * - **Tab**: Contact Info
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    google_maps: prismicT.LinkField;
    /**
     * Website field in *Article*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: article.website
     * - **Tab**: Contact Info
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    website: prismicT.LinkField;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice = ImageSlice | QuoteSlice | TextSlice | MenuItemSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticleDocumentData>, "article", Lang>;
/** Content for Author documents */
interface AuthorDocumentData {
    /**
     * Name field in *Author*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: author.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Byline field in *Author*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: author.byline
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    byline: prismicT.KeyTextField;
    /**
     * Profile field in *Author*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: author.profile
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile: prismicT.ImageField<never>;
    /**
     * Bio field in *Author*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: author.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
}
/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Homepage Label field in *Navigation*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Label for the homepage link
     * - **API ID Path**: navigation.homepageLabel
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    homepageLabel: prismicT.TitleField;
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
    /**
     * Hide Banner field in *Page*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: page.hide_banner
     * - **Tab**: Variations
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    hide_banner: prismicT.BooleanField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = ImageSlice | QuoteSlice | TextSlice | ArticleListSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Name field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Name of your blog (e.g. your name)
     * - **API ID Path**: settings.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Short description of your blog
     * - **API ID Path**: settings.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Profile Picture field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.profilePicture
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profilePicture: prismicT.ImageField<never>;
    /**
     * Newsletter Description field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text above the sign up form
     * - **API ID Path**: settings.newsletterDescription
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    newsletterDescription: prismicT.RichTextField;
    /**
     * Newsletter Disclaimer field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Small text below sign up form
     * - **API ID Path**: settings.newsletterDisclaimer
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    newsletterDisclaimer: prismicT.RichTextField;
    /**
     * intro field in *Settings*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.intro
     * - **Tab**: Homepage
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    intro: prismicT.RichTextField;
    /**
     * Homepage Hero field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.homepage_hero
     * - **Tab**: Homepage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    homepage_hero: prismicT.ImageField<never>;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = ArticleDocument | AuthorDocument | NavigationDocument | PageDocument | SettingsDocument;
/**
 * Primary content in ArticleList → Primary
 *
 */
interface ArticleListSliceDefaultPrimary {
    /**
     * Title field in *ArticleList → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: article_list.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ArticleList → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: article_list.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for ArticleList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ArticleList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleListSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ArticleListSliceDefaultPrimary>, never>;
/**
 * Primary content in ArticleList → Primary
 *
 */
interface ArticleListSliceCompactPrimary {
    /**
     * Title field in *ArticleList → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: article_list.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ArticleList → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: article_list.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Compact variation for ArticleList Slice
 *
 * - **API ID**: `compact`
 * - **Description**: `ArticleList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleListSliceCompact = prismicT.SharedSliceVariation<"compact", Simplify<ArticleListSliceCompactPrimary>, never>;
/**
 * Slice variation for *ArticleList*
 *
 */
type ArticleListSliceVariation = ArticleListSliceDefault | ArticleListSliceCompact;
/**
 * ArticleList Shared Slice
 *
 * - **API ID**: `article_list`
 * - **Description**: `ArticleList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleListSlice = prismicT.SharedSlice<"article_list", ArticleListSliceVariation>;
/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *ContactForm*
 *
 */
type ContactFormSliceVariation = ContactFormSliceDefault;
/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSlice = prismicT.SharedSlice<"contact_form", ContactFormSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWidePrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Wide variation for Image Slice
 *
 * - **API ID**: `wide`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWide = prismicT.SharedSliceVariation<"wide", Simplify<ImageSliceWidePrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceWide;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in MenuItems → Primary
 *
 */
interface MenuItemSliceDefaultPrimary {
    /**
     * Title field in *MenuItems → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Wednesday Brunch deal
     * - **API ID Path**: menu_item.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *MenuItems → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: menu_item.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in MenuItems → Items
 *
 */
export interface MenuItemSliceDefaultItem {
    /**
     * Name field in *MenuItems → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Price field in *MenuItems → Items*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.items[].price
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    price: prismicT.NumberField;
    /**
     * Rating field in *MenuItems → Items*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.items[].rating
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    rating: prismicT.NumberField;
    /**
     * Review field in *MenuItems → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.items[].review
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    review: prismicT.KeyTextField;
    /**
     * Reviewer field in *MenuItems → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: menu_item.items[].reviewer
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    reviewer: prismicT.RelationField<"author">;
}
/**
 * Default variation for MenuItems Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MenuItemSliceDefaultPrimary>, Simplify<MenuItemSliceDefaultItem>>;
/**
 * Slice variation for *MenuItems*
 *
 */
type MenuItemSliceVariation = MenuItemSliceDefault;
/**
 * MenuItems Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: `MenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuItemSlice = prismicT.SharedSlice<"menu_item", MenuItemSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
    /**
     * Quote field in *Quote → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Quote without quotation marks
     * - **API ID Path**: quote.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.TitleField;
    /**
     * Source field in *Quote → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Source of the quote
     * - **API ID Path**: quote.primary.source
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    source: prismicT.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuoteSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with rich formatting
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ArticleDocumentData, ArticleDocumentDataSlicesSlice, ArticleDocument, AuthorDocumentData, AuthorDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, ArticleListSliceDefaultPrimary, ArticleListSliceDefault, ArticleListSliceCompactPrimary, ArticleListSliceCompact, ArticleListSliceVariation, ArticleListSlice, ContactFormSliceDefault, ContactFormSliceVariation, ContactFormSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceWidePrimary, ImageSliceWide, ImageSliceVariation, ImageSlice, MenuItemSliceDefaultPrimary, MenuItemSliceDefaultItem, MenuItemSliceDefault, MenuItemSliceVariation, MenuItemSlice, QuoteSliceDefaultPrimary, QuoteSliceDefault, QuoteSliceVariation, QuoteSlice, TextSliceDefaultPrimary, TextSliceDefault, TextSliceVariation, TextSlice };
    }
}
