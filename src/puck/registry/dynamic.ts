import PostsBlock from "@/components/blocks/posts-block";
import LoopGridBlock from "@/components/blocks/loop-grid-block";
import LoopCarouselBlock from "@/components/blocks/loop-carousel-block";
import TaxonomyFilterBlock from "@/components/blocks/taxonomy-filter-block";
import PostListBlock from "@/components/blocks/post-list-block";
import PostTimelineBlock from "@/components/blocks/post-timeline-block";
import FeaturedPostBlock from "@/components/blocks/featured-post-block";
import NewsTickerBlock from "@/components/blocks/news-ticker-block";
import CategoryCardsBlock from "@/components/blocks/category-cards-block";
import RelatedPostsBlock from "@/components/blocks/related-posts-block";
import AuthorBoxBlock from "@/components/blocks/author-box-block";
import ContentTickerBlock from "@/components/blocks/content-ticker-block";
import type {
  PostsBlock as PostsBlockType,
  LoopGridBlock as LoopGridBlockType,
  LoopCarouselBlock as LoopCarouselBlockType,
  TaxonomyFilterBlock as TaxonomyFilterBlockType,
  PostListBlock as PostListBlockType,
  PostTimelineBlock as PostTimelineBlockType,
  FeaturedPostBlock as FeaturedPostBlockType,
  NewsTickerBlock as NewsTickerBlockType,
  CategoryCardsBlock as CategoryCardsBlockType,
  RelatedPostsBlock as RelatedPostsBlockType,
  AuthorBoxBlock as AuthorBoxBlockType,
  ContentTickerBlock as ContentTickerBlockType,
} from "@/lib/types";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";

const postsToBlock = (props: any): PostsBlockType => ({
  __component: "shared.posts",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  layout: props.layout || null,
  columns: props.columns || null,
  categorySlug: props.categorySlug || null,
  postsLimit:
    props.postsLimit === "" || props.postsLimit == null
      ? null
      : Number(props.postsLimit),
  orderBy: props.orderBy || null,
  showImage: props.showImage ?? null,
  showExcerpt: props.showExcerpt ?? null,
  showCategory: props.showCategory ?? null,
  showDate: props.showDate ?? null,
  showReadMore: props.showReadMore ?? null,
  readMoreLabel: props.readMoreLabel || null,
});

const loopGridToBlock = (props: any): LoopGridBlockType => ({
  __component: "shared.loop-grid",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  contentType: props.contentType || null,
  categorySlug: props.categorySlug || null,
  columns: props.columns || null,
  itemsPerPage:
    props.itemsPerPage === "" || props.itemsPerPage == null
      ? null
      : Number(props.itemsPerPage),
  orderBy: props.orderBy || null,
  showImage: props.showImage ?? null,
  showExcerpt: props.showExcerpt ?? null,
  showDate: props.showDate ?? null,
});

const loopCarouselToBlock = (props: any): LoopCarouselBlockType => ({
  __component: "shared.loop-carousel",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  contentType: props.contentType || null,
  categorySlug: props.categorySlug || null,
  itemsToShow:
    props.itemsToShow === "" || props.itemsToShow == null
      ? null
      : Number(props.itemsToShow),
  itemsToScroll:
    props.itemsToScroll === "" || props.itemsToScroll == null
      ? null
      : Number(props.itemsToScroll),
  orderBy: props.orderBy || null,
  autoplay: props.autoplay ?? null,
  autoplaySpeed:
    props.autoplaySpeed === "" || props.autoplaySpeed == null
      ? null
      : Number(props.autoplaySpeed),
  showArrows: props.showArrows ?? null,
  showDots: props.showDots ?? null,
});

const taxonomyFilterToBlock = (props: any): TaxonomyFilterBlockType => ({
  __component: "shared.taxonomy-filter",
  id: 0,
  heading: props.heading || null,
  contentType: props.contentType || "posts",
  filterBy: props.filterBy || null,
  layout: props.layout || null,
  showAllOption: props.showAllOption ?? null,
  allOptionLabel: props.allOptionLabel || null,
  columns: props.columns || null,
  itemsPerPage:
    props.itemsPerPage === "" || props.itemsPerPage == null
      ? null
      : Number(props.itemsPerPage),
});

const postListToBlock = (props: any): PostListBlockType => ({
  __component: "shared.post-list",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  categorySlug: props.categorySlug || null,
  postsLimit:
    props.postsLimit === "" || props.postsLimit == null
      ? null
      : Number(props.postsLimit),
  orderBy: props.orderBy || null,
  showImage: props.showImage ?? null,
  showExcerpt: props.showExcerpt ?? null,
  showCategory: props.showCategory ?? null,
  showDate: props.showDate ?? null,
});

const postTimelineToBlock = (props: any): PostTimelineBlockType => ({
  __component: "shared.post-timeline",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  categorySlug: props.categorySlug || null,
  postsLimit:
    props.postsLimit === "" || props.postsLimit == null
      ? null
      : Number(props.postsLimit),
  orderBy: props.orderBy || null,
  showImage: props.showImage ?? null,
  showExcerpt: props.showExcerpt ?? null,
});

const featuredPostToBlock = (props: any): FeaturedPostBlockType => ({
  __component: "shared.featured-post",
  id: 0,
  heading: props.heading || null,
  categorySlug: props.categorySlug || null,
  orderBy: props.orderBy || null,
  showExcerpt: props.showExcerpt ?? null,
  showCategory: props.showCategory ?? null,
  showDate: props.showDate ?? null,
  ctaLabel: props.ctaLabel || null,
});

const newsTickerToBlock = (props: any): NewsTickerBlockType => ({
  __component: "shared.news-ticker",
  id: 0,
  label: props.label || null,
  categorySlug: props.categorySlug || null,
  postsLimit:
    props.postsLimit === "" || props.postsLimit == null
      ? null
      : Number(props.postsLimit),
  orderBy: props.orderBy || null,
  speed: props.speed || null,
  pauseOnHover: props.pauseOnHover ?? null,
});

const categoryCardsToBlock = (props: any): CategoryCardsBlockType => ({
  __component: "shared.category-cards",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  columns: props.columns || null,
  showCount: props.showCount ?? null,
  showDescription: props.showDescription ?? null,
  limit:
    props.limit === "" || props.limit == null ? null : Number(props.limit),
});

const relatedPostsToBlock = (props: any): RelatedPostsBlockType => ({
  __component: "shared.related-posts",
  id: 0,
  heading: props.heading || null,
  categorySlug: props.categorySlug || null,
  postsLimit:
    props.postsLimit === "" || props.postsLimit == null
      ? null
      : Number(props.postsLimit),
  columns: props.columns || null,
  showImage: props.showImage ?? null,
  showExcerpt: props.showExcerpt ?? null,
  showDate: props.showDate ?? null,
});

const authorBoxToBlock = (props: any): AuthorBoxBlockType => ({
  __component: "shared.author-box",
  id: 0,
  name: props.name || "Author",
  role: props.role || null,
  bio: props.bio || null,
  avatarUrl: props.avatarUrl || null,
  websiteUrl: props.websiteUrl || null,
  twitterUrl: props.twitterUrl || null,
  linkedinUrl: props.linkedinUrl || null,
  align: props.align || null,
});

const contentTickerToBlock = (props: any): ContentTickerBlockType => ({
  __component: "shared.content-ticker",
  id: 0,
  heading: props.heading || null,
  source: props.source || null,
  categorySlug: props.categorySlug || null,
  postsLimit:
    props.postsLimit === "" || props.postsLimit == null
      ? null
      : Number(props.postsLimit),
  speed: props.speed || null,
  direction: props.direction || null,
  items: (props.items ?? []).map((item: any) => ({
    text: item.text || "",
    url: item.url || null,
  })),
});

export const dynamicRegistry: RegistryEntry[] = [
  {
    puckType: "Posts",
    strapiComponent: "shared.posts",
    label: "Posts",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      layout: selectField(["list", "grid", "masonry"]),
      columns: selectField(["1", "2", "3", "4"]),
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      orderBy: selectField(["newest", "oldest", "title"]),
      showImage: boolField(),
      showExcerpt: boolField(),
      showCategory: boolField(),
      showDate: boolField(),
      showReadMore: boolField(),
      readMoreLabel: { type: "text" },
    },
    defaultProps: {
      heading: "Latest posts",
      subheading: "",
      layout: "grid",
      columns: "3",
      categorySlug: "",
      postsLimit: 6,
      orderBy: "newest",
      showImage: true,
      showExcerpt: true,
      showCategory: true,
      showDate: true,
      showReadMore: true,
      readMoreLabel: "Read more",
    },
    fromBlock: (block) => {
      const b = block as PostsBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        layout: b.layout ?? "grid",
        columns: b.columns ?? "3",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 6,
        orderBy: b.orderBy ?? "newest",
        showImage: b.showImage ?? true,
        showExcerpt: b.showExcerpt ?? true,
        showCategory: b.showCategory ?? true,
        showDate: b.showDate ?? true,
        showReadMore: b.showReadMore ?? true,
        readMoreLabel: b.readMoreLabel ?? "Read more",
      };
    },
    toBlock: postsToBlock,
    render: (props: any) => createElement(PostsBlock, { block: postsToBlock(props) }),
  },
  {
    puckType: "LoopGrid",
    strapiComponent: "shared.loop-grid",
    label: "Loop Grid",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      contentType: selectField(["posts", "pages"]),
      categorySlug: { type: "text" },
      columns: selectField(["2", "3", "4"]),
      itemsPerPage: { type: "number" },
      orderBy: selectField(["newest", "oldest", "title"]),
      showImage: boolField(),
      showExcerpt: boolField(),
      showDate: boolField(),
    },
    defaultProps: {
      heading: "Loop grid",
      subheading: "",
      contentType: "posts",
      categorySlug: "",
      columns: "3",
      itemsPerPage: 9,
      orderBy: "newest",
      showImage: true,
      showExcerpt: true,
      showDate: true,
    },
    fromBlock: (block) => {
      const b = block as LoopGridBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        contentType: b.contentType ?? "posts",
        categorySlug: b.categorySlug ?? "",
        columns: b.columns ?? "3",
        itemsPerPage: b.itemsPerPage ?? 9,
        orderBy: b.orderBy ?? "newest",
        showImage: b.showImage ?? true,
        showExcerpt: b.showExcerpt ?? true,
        showDate: b.showDate ?? true,
      };
    },
    toBlock: loopGridToBlock,
    render: (props: any) => createElement(LoopGridBlock, { block: loopGridToBlock(props) }),
  },
  {
    puckType: "LoopCarousel",
    strapiComponent: "shared.loop-carousel",
    label: "Loop Carousel",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      contentType: selectField(["posts", "pages"]),
      categorySlug: { type: "text" },
      itemsToShow: { type: "number" },
      itemsToScroll: { type: "number" },
      orderBy: selectField(["newest", "oldest", "title"]),
      autoplay: boolField(),
      autoplaySpeed: { type: "number" },
      showArrows: boolField(),
      showDots: boolField(),
    },
    defaultProps: {
      heading: "Loop carousel",
      subheading: "",
      contentType: "posts",
      categorySlug: "",
      itemsToShow: 3,
      itemsToScroll: 1,
      orderBy: "newest",
      autoplay: false,
      autoplaySpeed: 3000,
      showArrows: true,
      showDots: true,
    },
    fromBlock: (block) => {
      const b = block as LoopCarouselBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        contentType: b.contentType ?? "posts",
        categorySlug: b.categorySlug ?? "",
        itemsToShow: b.itemsToShow ?? 3,
        itemsToScroll: b.itemsToScroll ?? 1,
        orderBy: b.orderBy ?? "newest",
        autoplay: b.autoplay ?? false,
        autoplaySpeed: b.autoplaySpeed ?? 3000,
        showArrows: b.showArrows ?? true,
        showDots: b.showDots ?? true,
      };
    },
    toBlock: loopCarouselToBlock,
    render: (props: any) => createElement(LoopCarouselBlock, { block: loopCarouselToBlock(props) }),
  },
  {
    puckType: "TaxonomyFilter",
    strapiComponent: "shared.taxonomy-filter",
    label: "Taxonomy Filter",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      contentType: selectField(["posts", "pages"]),
      filterBy: selectField(["category", "tag"]),
      layout: selectField(["dropdown", "pills", "checkboxes"]),
      showAllOption: boolField(),
      allOptionLabel: { type: "text" },
      columns: selectField(["2", "3", "4"]),
      itemsPerPage: { type: "number" },
    },
    defaultProps: {
      heading: "Filter",
      contentType: "posts",
      filterBy: "category",
      layout: "pills",
      showAllOption: true,
      allOptionLabel: "All",
      columns: "3",
      itemsPerPage: 9,
    },
    fromBlock: (block) => {
      const b = block as TaxonomyFilterBlockType;
      return {
        heading: b.heading ?? "",
        contentType: b.contentType ?? "posts",
        filterBy: b.filterBy ?? "category",
        layout: b.layout ?? "pills",
        showAllOption: b.showAllOption ?? true,
        allOptionLabel: b.allOptionLabel ?? "All",
        columns: b.columns ?? "3",
        itemsPerPage: b.itemsPerPage ?? 9,
      };
    },
    toBlock: taxonomyFilterToBlock,
    render: (props: any) => createElement(TaxonomyFilterBlock, { block: taxonomyFilterToBlock(props) }),
  },
  {
    puckType: "PostList",
    strapiComponent: "shared.post-list",
    label: "Post List",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      orderBy: selectField(["newest", "oldest", "title"]),
      showImage: boolField(),
      showExcerpt: boolField(),
      showCategory: boolField(),
      showDate: boolField(),
    },
    defaultProps: {
      heading: "Post list",
      subheading: "",
      categorySlug: "",
      postsLimit: 5,
      orderBy: "newest",
      showImage: true,
      showExcerpt: false,
      showCategory: true,
      showDate: true,
    },
    fromBlock: (block) => {
      const b = block as PostListBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 5,
        orderBy: b.orderBy ?? "newest",
        showImage: b.showImage ?? true,
        showExcerpt: b.showExcerpt ?? false,
        showCategory: b.showCategory ?? true,
        showDate: b.showDate ?? true,
      };
    },
    toBlock: postListToBlock,
    render: (props: any) => createElement(PostListBlock, { block: postListToBlock(props) }),
  },
  {
    puckType: "PostTimeline",
    strapiComponent: "shared.post-timeline",
    label: "Post Timeline",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      orderBy: selectField(["newest", "oldest"]),
      showImage: boolField(),
      showExcerpt: boolField(),
    },
    defaultProps: {
      heading: "Timeline",
      subheading: "",
      categorySlug: "",
      postsLimit: 6,
      orderBy: "newest",
      showImage: true,
      showExcerpt: true,
    },
    fromBlock: (block) => {
      const b = block as PostTimelineBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 6,
        orderBy: b.orderBy ?? "newest",
        showImage: b.showImage ?? true,
        showExcerpt: b.showExcerpt ?? true,
      };
    },
    toBlock: postTimelineToBlock,
    render: (props: any) =>
      createElement(PostTimelineBlock, { block: postTimelineToBlock(props) }),
  },
  {
    puckType: "FeaturedPost",
    strapiComponent: "shared.featured-post",
    label: "Featured Post",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      categorySlug: { type: "text" },
      orderBy: selectField(["newest", "oldest", "title"]),
      showExcerpt: boolField(),
      showCategory: boolField(),
      showDate: boolField(),
      ctaLabel: { type: "text" },
    },
    defaultProps: {
      heading: "Featured",
      categorySlug: "",
      orderBy: "newest",
      showExcerpt: true,
      showCategory: true,
      showDate: true,
      ctaLabel: "Read article",
    },
    fromBlock: (block) => {
      const b = block as FeaturedPostBlockType;
      return {
        heading: b.heading ?? "",
        categorySlug: b.categorySlug ?? "",
        orderBy: b.orderBy ?? "newest",
        showExcerpt: b.showExcerpt ?? true,
        showCategory: b.showCategory ?? true,
        showDate: b.showDate ?? true,
        ctaLabel: b.ctaLabel ?? "Read article",
      };
    },
    toBlock: featuredPostToBlock,
    render: (props: any) =>
      createElement(FeaturedPostBlock, { block: featuredPostToBlock(props) }),
  },
  {
    puckType: "NewsTicker",
    strapiComponent: "shared.news-ticker",
    label: "News Ticker",
    category: "Dynamic",
    fields: {
      label: { type: "text" },
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      orderBy: selectField(["newest", "oldest", "title"]),
      speed: selectField(["slow", "medium", "fast"]),
      pauseOnHover: boolField(),
    },
    defaultProps: {
      label: "Latest",
      categorySlug: "",
      postsLimit: 8,
      orderBy: "newest",
      speed: "medium",
      pauseOnHover: true,
    },
    fromBlock: (block) => {
      const b = block as NewsTickerBlockType;
      return {
        label: b.label ?? "Latest",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 8,
        orderBy: b.orderBy ?? "newest",
        speed: b.speed ?? "medium",
        pauseOnHover: b.pauseOnHover ?? true,
      };
    },
    toBlock: newsTickerToBlock,
    render: (props: any) =>
      createElement(NewsTickerBlock, { block: newsTickerToBlock(props) }),
  },
  {
    puckType: "CategoryCards",
    strapiComponent: "shared.category-cards",
    label: "Category Cards",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      showCount: boolField(),
      showDescription: boolField(),
      limit: { type: "number" },
    },
    defaultProps: {
      heading: "Categories",
      subheading: "",
      columns: "3",
      showCount: true,
      showDescription: true,
      limit: 6,
    },
    fromBlock: (block) => {
      const b = block as CategoryCardsBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        columns: b.columns ?? "3",
        showCount: b.showCount ?? true,
        showDescription: b.showDescription ?? true,
        limit: b.limit ?? 6,
      };
    },
    toBlock: categoryCardsToBlock,
    render: (props: any) =>
      createElement(CategoryCardsBlock, { block: categoryCardsToBlock(props) }),
  },
  {
    puckType: "RelatedPosts",
    strapiComponent: "shared.related-posts",
    label: "Related Posts",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      columns: selectField(["2", "3", "4"]),
      showImage: boolField(),
      showExcerpt: boolField(),
      showDate: boolField(),
    },
    defaultProps: {
      heading: "Related posts",
      categorySlug: "",
      postsLimit: 3,
      columns: "3",
      showImage: true,
      showExcerpt: true,
      showDate: true,
    },
    fromBlock: (block) => {
      const b = block as RelatedPostsBlockType;
      return {
        heading: b.heading ?? "Related posts",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 3,
        columns: b.columns ?? "3",
        showImage: b.showImage ?? true,
        showExcerpt: b.showExcerpt ?? true,
        showDate: b.showDate ?? true,
      };
    },
    toBlock: relatedPostsToBlock,
    render: (props: any) =>
      createElement(RelatedPostsBlock, { block: relatedPostsToBlock(props) }),
  },
  {
    puckType: "AuthorBox",
    strapiComponent: "shared.author-box",
    label: "Author Box",
    category: "Dynamic",
    fields: {
      name: { type: "text" },
      role: { type: "text" },
      bio: { type: "textarea" },
      avatarUrl: { type: "text" },
      websiteUrl: { type: "text" },
      twitterUrl: { type: "text" },
      linkedinUrl: { type: "text" },
      align: selectField(["left", "center"]),
    },
    defaultProps: {
      name: "Jane Doe",
      role: "Editor",
      bio: "Writer and editor covering community news.",
      avatarUrl: "",
      websiteUrl: "",
      twitterUrl: "",
      linkedinUrl: "",
      align: "left",
    },
    fromBlock: (block) => {
      const b = block as AuthorBoxBlockType;
      return {
        name: b.name ?? "",
        role: b.role ?? "",
        bio: b.bio ?? "",
        avatarUrl: b.avatarUrl ?? "",
        websiteUrl: b.websiteUrl ?? "",
        twitterUrl: b.twitterUrl ?? "",
        linkedinUrl: b.linkedinUrl ?? "",
        align: b.align ?? "left",
      };
    },
    toBlock: authorBoxToBlock,
    render: (props: any) =>
      createElement(AuthorBoxBlock, { block: authorBoxToBlock(props) }),
  },
  {
    puckType: "ContentTicker",
    strapiComponent: "shared.content-ticker",
    label: "Content Ticker",
    category: "Dynamic",
    fields: {
      heading: { type: "text" },
      source: selectField(["posts", "custom"]),
      categorySlug: { type: "text" },
      postsLimit: { type: "number" },
      speed: selectField(["slow", "medium", "fast"]),
      direction: selectField(["left", "right"]),
      items: {
        type: "array",
        arrayFields: {
          text: { type: "text" },
          url: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "",
      source: "posts",
      categorySlug: "",
      postsLimit: 8,
      speed: "medium",
      direction: "left",
      items: [
        { text: "Custom headline one", url: "/" },
        { text: "Custom headline two", url: "/" },
      ],
    },
    fromBlock: (block) => {
      const b = block as ContentTickerBlockType;
      return {
        heading: b.heading ?? "",
        source: b.source ?? "posts",
        categorySlug: b.categorySlug ?? "",
        postsLimit: b.postsLimit ?? 8,
        speed: b.speed ?? "medium",
        direction: b.direction ?? "left",
        items: (b.items ?? []).map((item) => ({
          text: item.text ?? "",
          url: item.url ?? "",
        })),
      };
    },
    toBlock: contentTickerToBlock,
    render: (props: any) =>
      createElement(ContentTickerBlock, { block: contentTickerToBlock(props) }),
  },
];
