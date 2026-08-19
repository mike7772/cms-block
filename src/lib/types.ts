export type { StrapiMedia } from "./types/media";
export type {
  AccordionBlock,
  AccordionItem,
  AdvancedHeadingBlock,
  AlertBlock,
  AnimatedHeadlineBlock,
  AudioPlayerBlock,
  BannerBlock,
  BeforeAfterBlock,
  BreadcrumbsBlock,
  ButtonBlock,
  ButtonGroupBlock,
  ChartBlock,
  CodeHighlightBlock,
  ColumnsBlock,
  ContactFormBlock,
  ContentBlock,
  ContentCardItem,
  ContentCardsBlock,
  CountdownBlock,
  CtaBlock,
  DataTableBlock,
  DividerBlock,
  FaqBlock,
  FaqItem,
  FeatureItem,
  FeaturesGridBlock,
  FileDownloadBlock,
  FlipBoxItem,
  FlipBoxesBlock,
  FooterBlock,
  GalleryBlock,
  GoogleMapsBlock,
  HeaderBlock,
  HeroBlock,
  HotspotBlock,
  HotspotPoint,
  HtmlEmbedBlock,
  IconBoxBlock,
  IconListBlock,
  IconListItem,
  IframeEmbedBlock,
  ImageBoxBlock,
  LexicalRichTextBlock,
  LinkInBioBlock,
  LinkInBioItem,
  LoginFormBlock,
  LogoCloudBlock,
  LoopCarouselBlock,
  LoopGridBlock,
  LottieBlock,
  MarqueeBlock,
  MediaBlock,
  MenuAnchorBlock,
  MenuBlock,
  MenuChildLinkItem,
  MenuMegaGroup,
  MenuLinkItem,
  ModalBlock,
  NewsletterBlock,
  OffCanvasBlock,
  PortfolioBlock,
  PortfolioItem,
  PostsBlock,
  PostListBlock,
  PostTimelineBlock,
  FeaturedPostBlock,
  NewsTickerBlock,
  CategoryCardsBlock,
  RelatedPostsBlock,
  AuthorBoxBlock,
  ContentTickerItem,
  ContentTickerBlock,
  ImageAccordionItem,
  ImageAccordionBlock,
  DualButtonBlock,
  ProtectedContentBlock,
  ReadingProgressBlock,
  BackToTopBlock,
  BusinessHoursDay,
  BusinessHoursBlock,
  ToggleBlock,
  ContentToggleBlock,
  NumberCounterBlock,
  CircleCounterBlock,
  PostSliderBlock,
  VideoSliderItem,
  VideoSliderBlock,
  FilterablePortfolioItem,
  FilterablePortfolioBlock,
  PostNavigationBlock,
  ReadingTimeBlock,
  LogoBlock,
  IconBlock,
  BlurbBlock,
  DropdownItem,
  DropdownBlock,
  PromoBoxBlock,
  PriceListBlock,
  PriceListItem,
  PricingBlock,
  PricingPlanItem,
  ProgressBarItem,
  ProgressBarsBlock,
  ProgressTrackerBlock,
  ProgressTrackerStep,
  QuoteBlock,
  RatingBlock,
  ReviewItem,
  ReviewsBlock,
  RichTextBlock,
  SearchBarBlock,
  SectionBlock,
  ShareButtonsBlock,
  SitemapBlock,
  SliderBlock,
  SocialIconItem,
  SocialIconsBlock,
  SpacerBlock,
  StatItem,
  StatsBlock,
  StepItem,
  StepsBlock,
  TabItem,
  TableOfContentsBlock,
  TabsBlock,
  TaxonomyFilterBlock,
  TeamBlock,
  TeamMemberItem,
  TestimonialItem,
  TestimonialsBlock,
  TimelineBlock,
  TimelineItem,
  TocItem,
  VideoEmbedBlock,
  VideoPlaylistBlock,
  VideoPlaylistItem,
  SiteHomeHeroBlock,
  SiteHomeSearchBlock,
  SiteHomeAboutUsBlock,
  SiteHomeFeeCalculatorBlock,
  SiteHomeFeaturesBlock,
  SiteHomeUpdatesBlock,
  SiteHomeCoreFeaturesBlock,
  SiteHomeStatsBlock,
  SiteHomeFaqBlock,
  SiteHomeCtaBlock,
  SiteHomeContactInfoBlock,
  SiteAboutHeroBlock,
  SiteAboutQuickLinksBlock,
  SiteAboutBodyBlock,
  SiteContactHeroBlock,
  SiteContactInfoAndFormBlock,
  SiteContactMapBlock,
  SiteServicesHeroBlock,
  SiteServicesGridBlock,
  SiteServicesFeeCalculatorBlock,
  SiteServicesAdditionalBlock,
} from "./types/blocks";

import type { StrapiMedia } from "./types/media";
import type { ContentBlock } from "./types/blocks";

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  shareImage?: StrapiMedia | null;
}

export interface Page {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description?: string | null;
  showInNavigation?: boolean;
  sortOrder?: number;
  seo?: Seo | null;
  blocks?: ContentBlock[];
  puckData?: Record<string, unknown> | null;
}

export interface NavPage {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  sortOrder?: number;
}

export interface Author {
  id: number;
  name: string;
  email?: string;
  avatar?: StrapiMedia | null;
}

export interface Category {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
  description?: string | null;
  posts?: Array<{ id: number }> | null;
  postCount?: number;
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  createdAt: string;
  publishedAt?: string | null;
  cover?: StrapiMedia | null;
  author?: Author | null;
  category?: Category | null;
  seo?: Seo | null;
  blocks?: ContentBlock[];
  puckData?: Record<string, unknown> | null;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
