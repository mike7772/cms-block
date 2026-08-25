import type { ReactNode } from "react";
import type { StrapiMedia } from "./media";

/* -------------------------------------------------------------------------- */
/* Existing                                                                   */
/* -------------------------------------------------------------------------- */

export interface HeroBlock {
  __component: "shared.hero";
  id: number;
  title: string;
  subtitle?: string | null;
  align?: "left" | "center" | null;
  image?: StrapiMedia | null;
}

export interface RichTextBlock {
  __component: "shared.rich-text";
  id: number;
  body: string;
}

export interface LexicalRichTextBlock {
  __component: "shared.lexical-rich-text";
  id: number;
  body: string;
}

export interface MediaBlock {
  __component: "shared.media";
  id: number;
  file?: StrapiMedia | null;
}

export interface QuoteBlock {
  __component: "shared.quote";
  id: number;
  title?: string | null;
  body?: string | null;
}

export interface SliderBlock {
  __component: "shared.slider";
  id: number;
  files?: StrapiMedia[] | null;
}

export interface CtaBlock {
  __component: "shared.cta";
  id: number;
  title: string;
  body?: string | null;
  buttonLabel: string;
  buttonUrl: string;
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export interface AdvancedHeadingBlock {
  __component: "shared.advanced-heading";
  id: number;
  eyebrow?: string | null;
  title: string;
  subtitle?: string | null;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null;
  align?: "left" | "center" | "right" | null;
}

export interface AnimatedHeadlineBlock {
  __component: "shared.animated-headline";
  id: number;
  prefixText?: string | null;
  animatedWords: string;
  suffixText?: string | null;
  animationType?:
    | "typing"
    | "rotating"
    | "fade"
    | "slide"
    | "highlight"
    | null;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null;
  align?: "left" | "center" | "right" | null;
  animationSpeed?: "slow" | "normal" | "fast" | null;
}

export interface AlertBlock {
  __component: "shared.alert";
  id: number;
  variant: "info" | "success" | "warning" | "danger";
  title: string;
  message: string;
  dismissible?: boolean | null;
  icon?: StrapiMedia | null;
}

export interface AccordionItem {
  id?: number;
  title: string;
  content: string;
  defaultOpen?: boolean | null;
}

export interface AccordionBlock {
  __component: "shared.accordion";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  items?: AccordionItem[] | null;
}

export interface TabItem {
  id?: number;
  label: string;
  content: string;
  icon?: StrapiMedia | null;
}

export interface TabsBlock {
  __component: "shared.tabs";
  id: number;
  layout?: "horizontal" | "vertical" | null;
  tabs?: TabItem[] | null;
}

export interface IconBoxBlock {
  __component: "shared.icon-box";
  id: number;
  icon?: StrapiMedia | null;
  title: string;
  description?: string | null;
  align?: "left" | "center" | "right" | null;
  linkUrl?: string | null;
}

export interface ImageBoxBlock {
  __component: "shared.image-box";
  id: number;
  image?: StrapiMedia | null;
  title: string;
  description?: string | null;
  linkUrl?: string | null;
  linkLabel?: string | null;
  align?: "left" | "center" | "right" | null;
}

export interface ContentCardItem {
  id?: number;
  image?: StrapiMedia | null;
  title: string;
  excerpt?: string | null;
  linkUrl?: string | null;
  linkLabel?: string | null;
  badge?: string | null;
}

export interface ContentCardsBlock {
  __component: "shared.content-cards";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  cards?: ContentCardItem[] | null;
}

export interface CodeHighlightBlock {
  __component: "shared.code-highlight";
  id: number;
  code: string;
  language?:
    | "javascript"
    | "typescript"
    | "python"
    | "html"
    | "css"
    | "json"
    | "bash"
    | "sql"
    | "plaintext"
    | null;
  showLineNumbers?: boolean | null;
  showCopyButton?: boolean | null;
  theme?: "light" | "dark" | null;
  caption?: string | null;
}

export interface DataTableBlock {
  __component: "shared.data-table";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  striped?: boolean | null;
  bordered?: boolean | null;
  headers: unknown;
  rows: unknown;
}

export interface SpacerBlock {
  __component: "shared.spacer";
  id: number;
  height?: "small" | "medium" | "large" | "xlarge" | null;
  showDivider?: boolean | null;
  dividerStyle?: "solid" | "dashed" | "dotted" | null;
}

/* -------------------------------------------------------------------------- */
/* Marketing                                                                  */
/* -------------------------------------------------------------------------- */

export interface FeatureItem {
  id?: number;
  icon?: StrapiMedia | null;
  title: string;
  description?: string | null;
  linkUrl?: string | null;
  linkLabel?: string | null;
}

export interface FeaturesGridBlock {
  __component: "shared.features-grid";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  features?: FeatureItem[] | null;
}

export interface FaqItem {
  id?: number;
  question: string;
  answer: string;
}

export interface FaqBlock {
  __component: "shared.faq";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  items?: FaqItem[] | null;
}

export interface TestimonialItem {
  id?: number;
  quote: string;
  authorName: string;
  authorRole?: string | null;
  avatar?: StrapiMedia | null;
  rating?: "1" | "2" | "3" | "4" | "5" | null;
}

export interface TestimonialsBlock {
  __component: "shared.testimonials";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  layout?: "carousel" | "grid" | null;
  testimonials?: TestimonialItem[] | null;
}

export interface ReviewItem {
  id?: number;
  authorName: string;
  authorAvatar?: StrapiMedia | null;
  rating: "1" | "2" | "3" | "4" | "5";
  title?: string | null;
  body: string;
  date?: string | null;
  source?: "google" | "facebook" | "internal" | "other" | null;
}

export interface ReviewsBlock {
  __component: "shared.reviews";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  layout?: "grid" | "carousel" | "list" | null;
  columns?: "2" | "3" | "4" | null;
  showAverageRating?: boolean | null;
  reviews?: ReviewItem[] | null;
}

export interface StatItem {
  id?: number;
  value: string;
  suffix?: string | null;
  label: string;
  icon?: StrapiMedia | null;
}

export interface StatsBlock {
  __component: "shared.stats";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  backgroundImage?: StrapiMedia | null;
  stats?: StatItem[] | null;
}

export interface TeamMemberItem {
  id?: number;
  name: string;
  role?: string | null;
  photo?: StrapiMedia | null;
  bio?: string | null;
  email?: string | null;
  linkedinUrl?: string | null;
  twitterUrl?: string | null;
}

export interface TeamBlock {
  __component: "shared.team";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  members?: TeamMemberItem[] | null;
}

export interface PricingPlanItem {
  id?: number;
  planName: string;
  price: string;
  period?: string | null;
  description?: string | null;
  features?: unknown;
  isFeatured?: boolean | null;
  buttonLabel?: string | null;
  buttonUrl?: string | null;
}

export interface PricingBlock {
  __component: "shared.pricing";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  plans?: PricingPlanItem[] | null;
}

export interface PriceListItem {
  id?: number;
  title: string;
  price: string;
  description?: string | null;
  image?: StrapiMedia | null;
  isFeatured?: boolean | null;
}

export interface PriceListBlock {
  __component: "shared.price-list";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  layout?: "single" | "two-column" | null;
  items?: PriceListItem[] | null;
}

export interface FlipBoxItem {
  id?: number;
  frontIcon?: StrapiMedia | null;
  frontTitle: string;
  frontDescription?: string | null;
  backTitle?: string | null;
  backDescription?: string | null;
  buttonLabel?: string | null;
  buttonUrl?: string | null;
}

export interface FlipBoxesBlock {
  __component: "shared.flip-boxes";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  flipDirection?: "horizontal" | "vertical" | null;
  boxes?: FlipBoxItem[] | null;
}

export interface NewsletterBlock {
  __component: "shared.newsletter";
  id: number;
  heading: string;
  subheading?: string | null;
  placeholderText?: string | null;
  buttonLabel: string;
  backgroundImage?: StrapiMedia | null;
  layout?: "boxed" | "fullwidth" | "inline" | null;
}

export interface LinkInBioItem {
  id?: number;
  label: string;
  url: string;
  icon?: StrapiMedia | null;
  isFeatured?: boolean | null;
}

export interface LinkInBioBlock {
  __component: "shared.link-in-bio";
  id: number;
  profileImage?: StrapiMedia | null;
  name: string;
  bio?: string | null;
  backgroundColor?: "light" | "dark" | "gradient" | "custom" | null;
  buttonStyle?: "rounded" | "pill" | "square" | "outline" | null;
  links?: LinkInBioItem[] | null;
}

export interface CountdownBlock {
  __component: "shared.countdown";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  targetDate: string;
  showDays?: boolean | null;
  showHours?: boolean | null;
  showMinutes?: boolean | null;
  showSeconds?: boolean | null;
  expiredMessage?: string | null;
}

/* -------------------------------------------------------------------------- */
/* Media                                                                      */
/* -------------------------------------------------------------------------- */

export interface GalleryBlock {
  __component: "shared.gallery";
  id: number;
  heading?: string | null;
  layout?: "grid" | "masonry" | "justified" | null;
  columns?: "2" | "3" | "4" | "5" | null;
  enableLightbox?: boolean | null;
  images?: StrapiMedia[] | null;
}

export interface VideoEmbedBlock {
  __component: "shared.video-embed";
  id: number;
  videoUrl: string;
  posterImage?: StrapiMedia | null;
  caption?: string | null;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "21:9" | null;
}

export interface VideoPlaylistItem {
  id?: number;
  title: string;
  videoUrl: string;
  thumbnail?: StrapiMedia | null;
  duration?: string | null;
  description?: string | null;
}

export interface VideoPlaylistBlock {
  __component: "shared.video-playlist";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  layout?: "sidebar" | "grid" | "stacked" | null;
  autoplay?: boolean | null;
  videos?: VideoPlaylistItem[] | null;
}

export interface LogoCloudBlock {
  __component: "shared.logo-cloud";
  id: number;
  heading?: string | null;
  logos?: StrapiMedia[] | null;
}

export interface LottieBlock {
  __component: "shared.lottie";
  id: number;
  heading?: string | null;
  animationFile?: StrapiMedia | null;
  animationUrl?: string | null;
  loop?: boolean | null;
  autoplay?: boolean | null;
  speed?: "slow" | "normal" | "fast" | null;
  width?: "small" | "medium" | "large" | "full" | null;
  align?: "left" | "center" | "right" | null;
}

export interface GoogleMapsBlock {
  __component: "shared.google-maps";
  id: number;
  heading?: string | null;
  embedUrl: string;
  address?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  zoom?: number | null;
  height?: "small" | "medium" | "large" | null;
}

export interface HotspotPoint {
  id?: number;
  xPosition: number;
  yPosition: number;
  title: string;
  description?: string | null;
  linkUrl?: string | null;
}

export interface HotspotBlock {
  __component: "shared.hotspot";
  id: number;
  heading?: string | null;
  image?: StrapiMedia | null;
  trigger?: "hover" | "click" | null;
  points?: HotspotPoint[] | null;
}

export interface PortfolioItem {
  id?: number;
  title: string;
  description?: string | null;
  image?: StrapiMedia | null;
  category?: string | null;
  tags?: string | null;
  linkUrl?: string | null;
  client?: string | null;
  date?: string | null;
}

export interface PortfolioBlock {
  __component: "shared.portfolio";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  enableFilter?: boolean | null;
  items?: PortfolioItem[] | null;
}

/* -------------------------------------------------------------------------- */
/* Forms                                                                      */
/* -------------------------------------------------------------------------- */

export interface ContactFormBlock {
  __component: "shared.contact-form";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  recipientEmail?: string | null;
  showNameField?: boolean | null;
  showPhoneField?: boolean | null;
  showSubjectField?: boolean | null;
  showOrganizationField?: boolean | null;
  submitButtonLabel?: string | null;
  successMessage?: string | null;
}

export interface LoginFormBlock {
  __component: "shared.login-form";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  mode?: "login" | "register" | "both" | null;
  showRememberMe?: boolean | null;
  showForgotPassword?: boolean | null;
  loginButtonLabel?: string | null;
  registerButtonLabel?: string | null;
  redirectUrl?: string | null;
}

export interface SearchBarBlock {
  __component: "shared.search-bar";
  id: number;
  placeholder?: string | null;
  searchType?: "all" | "posts" | "pages" | null;
  style?: "inline" | "boxed" | "minimal" | "expanded" | null;
  buttonLabel?: string | null;
  showButton?: boolean | null;
  align?: "left" | "center" | "right" | null;
  width?: "small" | "medium" | "large" | "full" | null;
}

export interface OffCanvasBlock {
  __component: "shared.off-canvas";
  id: number;
  triggerLabel: string;
  triggerIcon?: StrapiMedia | null;
  position?: "left" | "right" | "top" | "bottom" | null;
  title?: string | null;
  content?: string | null;
  width?: "small" | "medium" | "large" | "full" | null;
  closeOnOverlayClick?: boolean | null;
}

export interface ProgressBarItem {
  id?: number;
  label: string;
  percentage: number;
  color?: "primary" | "success" | "warning" | "danger" | "info" | null;
}

export interface ProgressBarsBlock {
  __component: "shared.progress-bars";
  id: number;
  heading?: string | null;
  bars?: ProgressBarItem[] | null;
}

export interface ProgressTrackerStep {
  id?: number;
  title: string;
  description?: string | null;
  icon?: StrapiMedia | null;
  isComplete?: boolean | null;
}

export interface ProgressTrackerBlock {
  __component: "shared.progress-tracker";
  id: number;
  heading?: string | null;
  layout?: "horizontal" | "vertical" | null;
  currentStep?: number | null;
  steps?: ProgressTrackerStep[] | null;
}

/* -------------------------------------------------------------------------- */
/* Dynamic                                                                    */
/* -------------------------------------------------------------------------- */

export interface PostsBlock {
  __component: "shared.posts";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  layout?: "list" | "grid" | "masonry" | null;
  columns?: "1" | "2" | "3" | "4" | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  showImage?: boolean | null;
  showExcerpt?: boolean | null;
  showCategory?: boolean | null;
  showDate?: boolean | null;
  showReadMore?: boolean | null;
  readMoreLabel?: string | null;
}

export interface LoopGridBlock {
  __component: "shared.loop-grid";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  contentType?: "posts" | "pages" | null;
  categorySlug?: string | null;
  columns?: "2" | "3" | "4" | null;
  itemsPerPage?: number | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  showImage?: boolean | null;
  showExcerpt?: boolean | null;
  showDate?: boolean | null;
}

export interface LoopCarouselBlock {
  __component: "shared.loop-carousel";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  contentType?: "posts" | "pages" | null;
  categorySlug?: string | null;
  itemsToShow?: number | null;
  itemsToScroll?: number | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  autoplay?: boolean | null;
  autoplaySpeed?: number | null;
  showArrows?: boolean | null;
  showDots?: boolean | null;
}

export interface TaxonomyFilterBlock {
  __component: "shared.taxonomy-filter";
  id: number;
  heading?: string | null;
  contentType: "posts" | "pages";
  filterBy?: "category" | "tag" | null;
  layout?: "dropdown" | "pills" | "checkboxes" | null;
  showAllOption?: boolean | null;
  allOptionLabel?: string | null;
  columns?: "2" | "3" | "4" | null;
  itemsPerPage?: number | null;
}

export interface PostListBlock {
  __component: "shared.post-list";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  showImage?: boolean | null;
  showExcerpt?: boolean | null;
  showCategory?: boolean | null;
  showDate?: boolean | null;
}

export interface PostTimelineBlock {
  __component: "shared.post-timeline";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  orderBy?: "newest" | "oldest" | null;
  showImage?: boolean | null;
  showExcerpt?: boolean | null;
}

export interface FeaturedPostBlock {
  __component: "shared.featured-post";
  id: number;
  heading?: string | null;
  categorySlug?: string | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  showExcerpt?: boolean | null;
  showCategory?: boolean | null;
  showDate?: boolean | null;
  ctaLabel?: string | null;
}

export interface NewsTickerBlock {
  __component: "shared.news-ticker";
  id: number;
  label?: string | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  speed?: "slow" | "medium" | "fast" | null;
  pauseOnHover?: boolean | null;
}

export interface CategoryCardsBlock {
  __component: "shared.category-cards";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  showCount?: boolean | null;
  showDescription?: boolean | null;
  limit?: number | null;
}

export interface RelatedPostsBlock {
  __component: "shared.related-posts";
  id: number;
  heading?: string | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  columns?: "2" | "3" | "4" | null;
  showImage?: boolean | null;
  showExcerpt?: boolean | null;
  showDate?: boolean | null;
}

export interface AuthorBoxBlock {
  __component: "shared.author-box";
  id: number;
  name: string;
  role?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  websiteUrl?: string | null;
  twitterUrl?: string | null;
  linkedinUrl?: string | null;
  align?: "left" | "center" | null;
}

export interface ContentTickerItem {
  id?: number;
  text: string;
  url?: string | null;
}

export interface ContentTickerBlock {
  __component: "shared.content-ticker";
  id: number;
  heading?: string | null;
  source?: "posts" | "custom" | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  speed?: "slow" | "medium" | "fast" | null;
  direction?: "left" | "right" | null;
  items?: ContentTickerItem[] | null;
}

export interface ImageAccordionItem {
  id?: number;
  title: string;
  subtitle?: string | null;
  imageUrl: string;
  url?: string | null;
}

export interface ImageAccordionBlock {
  __component: "shared.image-accordion";
  id: number;
  heading?: string | null;
  height?: "small" | "medium" | "large" | null;
  items?: ImageAccordionItem[] | null;
}

export interface DualButtonBlock {
  __component: "shared.dual-button";
  id: number;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
  align?: "left" | "center" | "right" | null;
  stackOnMobile?: boolean | null;
}

export interface ProtectedContentBlock {
  __component: "shared.protected-content";
  id: number;
  heading?: string | null;
  message?: string | null;
  password: string;
  buttonLabel?: string | null;
  contentHtml: string;
}

export interface ReadingProgressBlock {
  __component: "shared.reading-progress";
  id: number;
  position?: "top" | "bottom" | null;
  heightPx?: number | null;
  color?: string | null;
}

export interface BackToTopBlock {
  __component: "shared.back-to-top";
  id: number;
  label?: string | null;
  showAfterPx?: number | null;
  position?: "bottom-right" | "bottom-left" | null;
}

export interface BusinessHoursDay {
  id?: number;
  day:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  openTime?: string | null;
  closeTime?: string | null;
  closed?: boolean | null;
}

export interface BusinessHoursBlock {
  __component: "shared.business-hours";
  id: number;
  heading?: string | null;
  timezoneNote?: string | null;
  showOpenBadge?: boolean | null;
  days?: BusinessHoursDay[] | null;
}

/* -------------------------------------------------------------------------- */
/* Bricks / Divi gap widgets                                                  */
/* -------------------------------------------------------------------------- */

export interface ToggleBlock {
  __component: "shared.toggle";
  id: number;
  title: string;
  content: string;
  openByDefault?: boolean | null;
  iconStyle?: "plus" | "chevron" | "caret" | null;
}

export interface ContentToggleBlock {
  __component: "shared.content-toggle";
  id: number;
  heading?: string | null;
  labelA: string;
  labelB: string;
  contentA: string;
  contentB: string;
  defaultPane?: "a" | "b" | null;
}

export interface NumberCounterBlock {
  __component: "shared.number-counter";
  id: number;
  heading?: string | null;
  prefix?: string | null;
  value: number;
  suffix?: string | null;
  label?: string | null;
  durationMs?: number | null;
  align?: "left" | "center" | "right" | null;
}

export interface CircleCounterBlock {
  __component: "shared.circle-counter";
  id: number;
  heading?: string | null;
  value: number;
  label?: string | null;
  suffix?: string | null;
  size?: "small" | "medium" | "large" | null;
  color?: string | null;
  durationMs?: number | null;
}

export interface PostSliderBlock {
  __component: "shared.post-slider";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  categorySlug?: string | null;
  postsLimit?: number | null;
  orderBy?: "newest" | "oldest" | "title" | null;
  showExcerpt?: boolean | null;
  showDate?: boolean | null;
  autoplay?: boolean | null;
  autoplaySpeed?: number | null;
}

export interface VideoSliderItem {
  id?: number;
  title?: string | null;
  videoUrl: string;
  posterUrl?: string | null;
}

export interface VideoSliderBlock {
  __component: "shared.video-slider";
  id: number;
  heading?: string | null;
  showArrows?: boolean | null;
  showDots?: boolean | null;
  items?: VideoSliderItem[] | null;
}

export interface FilterablePortfolioItem {
  id?: number;
  title: string;
  category: string;
  imageUrl: string;
  url?: string | null;
  description?: string | null;
}

export interface FilterablePortfolioBlock {
  __component: "shared.filterable-portfolio";
  id: number;
  heading?: string | null;
  subheading?: string | null;
  columns?: "2" | "3" | "4" | null;
  filterStyle?: "pills" | "dropdown" | "tabs" | null;
  allLabel?: string | null;
  showCounts?: boolean | null;
  items?: FilterablePortfolioItem[] | null;
}

export interface PostNavigationBlock {
  __component: "shared.post-navigation";
  id: number;
  prevLabel?: string | null;
  nextLabel?: string | null;
  prevTitle?: string | null;
  prevUrl?: string | null;
  nextTitle?: string | null;
  nextUrl?: string | null;
  showLabels?: boolean | null;
}

export interface ReadingTimeBlock {
  __component: "shared.reading-time";
  id: number;
  label?: string | null;
  wordsPerMinute?: number | null;
  wordCount?: number | null;
  contentHtml?: string | null;
  align?: "left" | "center" | "right" | null;
  showIcon?: boolean | null;
}

export interface LogoBlock {
  __component: "shared.logo";
  id: number;
  imageUrl: string;
  alt?: string | null;
  url?: string | null;
  widthPx?: number | null;
  align?: "left" | "center" | "right" | null;
}

export interface IconBlock {
  __component: "shared.icon";
  id: number;
  iconName?:
    | "star"
    | "heart"
    | "check"
    | "arrow"
    | "mail"
    | "phone"
    | "map"
    | "user"
    | "globe"
    | "spark"
    | null;
  imageUrl?: string | null;
  size?: "small" | "medium" | "large" | null;
  color?: string | null;
  linkUrl?: string | null;
  align?: "left" | "center" | "right" | null;
}

export interface BlurbBlock {
  __component: "shared.blurb";
  id: number;
  iconUrl?: string | null;
  title: string;
  description?: string | null;
  buttonLabel?: string | null;
  buttonUrl?: string | null;
  align?: "left" | "center" | "right" | null;
  layout?: "stacked" | "horizontal" | null;
}

export interface DropdownItem {
  id?: number;
  label: string;
  url: string;
}

export interface DropdownBlock {
  __component: "shared.dropdown";
  id: number;
  label: string;
  align?: "left" | "center" | "right" | null;
  items?: DropdownItem[] | null;
}

export interface PromoBoxBlock {
  __component: "shared.promo-box";
  id: number;
  eyebrow?: string | null;
  heading: string;
  text?: string | null;
  imageUrl?: string | null;
  buttonLabel?: string | null;
  buttonUrl?: string | null;
  layout?: "image-left" | "image-right" | "overlay" | null;
}

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export interface BreadcrumbsBlock {
  __component: "shared.breadcrumbs";
  id: number;
  separator?: "slash" | "chevron" | "arrow" | "dot" | null;
  showHomePage?: boolean | null;
  homePageLabel?: string | null;
  align?: "left" | "center" | "right" | null;
  style?: "plain" | "background" | "bordered" | null;
}

export interface MenuChildLinkItem {
  id?: number;
  /** Plain string on the public site; ReactNode when Puck inline-edits */
  label: string | ReactNode;
  url: string;
  /** Lucide icon key (e.g. "briefcase", "mail") */
  iconName?: string | null;
  openInNewTab?: boolean | null;
}

/** One mega-menu row: featured image/copy + child link list */
export interface MenuMegaGroup {
  id?: number;
  title?: string | ReactNode | null;
  description?: string | ReactNode | null;
  panelImage?: StrapiMedia | null;
  ctaLabel?: string | ReactNode | null;
  ctaUrl?: string | null;
  children?: MenuChildLinkItem[] | null;
}

export interface MenuLinkItem {
  id?: number;
  label: string | ReactNode;
  url: string;
  icon?: StrapiMedia | null;
  openInNewTab?: boolean | null;
  isButton?: boolean | null;
  /** Repeatable mega-menu rows (image + description | child links) */
  groups?: MenuMegaGroup[] | null;
  /** @deprecated Prefer groups[] — kept for older saved menus */
  description?: string | ReactNode | null;
  panelImage?: StrapiMedia | null;
  ctaLabel?: string | ReactNode | null;
  ctaUrl?: string | null;
  children?: MenuChildLinkItem[] | null;
}

export interface MenuBlock {
  __component: "shared.menu";
  id: number;
  heading?: string | ReactNode | null;
  orientation?: "horizontal" | "vertical" | null;
  style?: "plain" | "pills" | "underline" | "buttons" | null;
  links?: MenuLinkItem[] | null;
}

export interface MenuAnchorBlock {
  __component: "shared.menu-anchor";
  id: number;
  anchorId: string;
  label?: string | null;
}

export interface ShareButtonsBlock {
  __component: "shared.share-buttons";
  id: number;
  heading?: string | null;
  platforms?:
    | "facebook"
    | "twitter"
    | "linkedin"
    | "whatsapp"
    | "telegram"
    | "email"
    | "copy"
    | null;
  style?: "icon" | "icon-text" | "text" | null;
  align?: "left" | "center" | "right" | null;
  shape?: "circle" | "square" | "rounded" | null;
}

export interface SitemapBlock {
  __component: "shared.sitemap";
  id: number;
  heading?: string | null;
  layout?: "tree" | "grid" | "list" | null;
  columns?: "1" | "2" | "3" | "4" | null;
  showDescriptions?: boolean | null;
  maxDepth?: number | null;
}

export interface SocialIconItem {
  id?: number;
  platform:
    | "facebook"
    | "twitter"
    | "linkedin"
    | "instagram"
    | "youtube"
    | "telegram"
    | "whatsapp"
    | "email"
    | "website";
  url: string;
  label?: string | null;
}

export interface SocialIconsBlock {
  __component: "shared.social-icons";
  id: number;
  heading?: string | null;
  align?: "left" | "center" | "right" | null;
  icons?: SocialIconItem[] | null;
}

export interface TocItem {
  id?: number;
  label: string;
  anchorId: string;
}

export interface TableOfContentsBlock {
  __component: "shared.table-of-contents";
  id: number;
  heading?: string | null;
  mode?: "auto" | "manual" | null;
  items?: TocItem[] | null;
  sticky?: boolean | null;
  showNumbers?: boolean | null;
}

/* -------------------------------------------------------------------------- */
/* Layout                                                                     */
/* -------------------------------------------------------------------------- */

export interface SectionBlock {
  __component: "shared.section";
  id: number;
  content?: unknown;
  contentJson?: string | null;
  background?: "none" | "pale" | "sky" | "ink" | "image" | null;
  backgroundImage?: StrapiMedia | null;
  paddingY?: "none" | "small" | "medium" | "large" | null;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full" | null;
  align?: "left" | "center" | "right" | null;
}

export interface ColumnsBlock {
  __component: "shared.columns";
  id: number;
  columnCount?: "2" | "3" | "4" | null;
  gap?: "small" | "medium" | "large" | null;
  stackOnMobile?: boolean | null;
  column1?: unknown;
  column2?: unknown;
  column3?: unknown;
  column4?: unknown;
  column1Json?: string | null;
  column2Json?: string | null;
  column3Json?: string | null;
  column4Json?: string | null;
}

export interface HeaderBlock {
  __component: "shared.header";
  id: number;
  left?: unknown;
  center?: unknown;
  right?: unknown;
  leftJson?: string | null;
  centerJson?: string | null;
  rightJson?: string | null;
  sticky?: boolean | null;
  transparent?: boolean | null;
  showBorder?: boolean | null;
  showLanguageSwitcher?: boolean | null;
  background?: "white" | "pale" | "sky" | "ink" | "transparent" | null;
  maxWidth?: "md" | "lg" | "xl" | "full" | null;
  height?: "compact" | "default" | "tall" | null;
}

export interface FooterBlock {
  __component: "shared.footer";
  id: number;
  top?: unknown;
  column1?: unknown;
  column2?: unknown;
  column3?: unknown;
  column4?: unknown;
  column5?: unknown;
  column6?: unknown;
  bottom?: unknown;
  topJson?: string | null;
  column1Json?: string | null;
  column2Json?: string | null;
  column3Json?: string | null;
  column4Json?: string | null;
  column5Json?: string | null;
  column6Json?: string | null;
  bottomJson?: string | null;
  columnCount?: "1" | "2" | "3" | "4" | "5" | "6" | null;
  background?: "ink" | "trunk" | "pale" | "white" | null;
  maxWidth?: "md" | "lg" | "xl" | "full" | null;
  showTopBorder?: boolean | null;
}

export interface ButtonBlock {
  __component: "shared.button";
  id: number;
  label: string;
  url: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | null;
  size?: "small" | "medium" | "large" | null;
  align?: "left" | "center" | "right" | null;
  openInNewTab?: boolean | null;
}

export interface ButtonGroupBlock {
  __component: "shared.button-group";
  id: number;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string | null;
  secondaryUrl?: string | null;
  align?: "left" | "center" | "right" | null;
  stackOnMobile?: boolean | null;
}

export interface DividerBlock {
  __component: "shared.divider";
  id: number;
  style?: "solid" | "dashed" | "dotted" | null;
  width?: "small" | "medium" | "large" | "full" | null;
  spacing?: "small" | "medium" | "large" | null;
}

export interface IconListItem {
  id?: number;
  iconUrl?: string | null;
  title: string;
  description?: string | null;
}

export interface IconListBlock {
  __component: "shared.icon-list";
  id: number;
  title?: string | null;
  items?: IconListItem[] | null;
  columns?: "1" | "2" | null;
}

export interface HtmlEmbedBlock {
  __component: "shared.html-embed";
  id: number;
  html: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full" | null;
}

export interface IframeEmbedBlock {
  __component: "shared.iframe-embed";
  id: number;
  url: string;
  title?: string | null;
  height?: "small" | "medium" | "large" | null;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "21:9" | "auto" | null;
}

export interface BannerBlock {
  __component: "shared.banner";
  id: number;
  message: string;
  linkLabel?: string | null;
  linkUrl?: string | null;
  variant?: "info" | "success" | "warning" | "danger" | null;
  dismissible?: boolean | null;
}

export interface TimelineItem {
  id?: number;
  date?: string | null;
  title: string;
  description?: string | null;
}

export interface TimelineBlock {
  __component: "shared.timeline";
  id: number;
  title?: string | null;
  items?: TimelineItem[] | null;
}

export interface StepItem {
  id?: number;
  title: string;
  description?: string | null;
}

export interface StepsBlock {
  __component: "shared.steps";
  id: number;
  title?: string | null;
  items?: StepItem[] | null;
  layout?: "horizontal" | "vertical" | null;
}

export interface BeforeAfterBlock {
  __component: "shared.before-after";
  id: number;
  beforeImage?: StrapiMedia | null;
  afterImage?: StrapiMedia | null;
  beforeLabel?: string | null;
  afterLabel?: string | null;
}

export interface ModalBlock {
  __component: "shared.modal";
  id: number;
  triggerLabel: string;
  title?: string | null;
  content?: string | null;
  size?: "small" | "medium" | "large" | null;
}

export interface AudioPlayerBlock {
  __component: "shared.audio-player";
  id: number;
  title?: string | null;
  src: string;
  caption?: string | null;
}

export interface FileDownloadBlock {
  __component: "shared.file-download";
  id: number;
  title: string;
  description?: string | null;
  fileUrl: string;
  fileLabel?: string | null;
  fileType?: string | null;
}

export interface MarqueeBlock {
  __component: "shared.marquee";
  id: number;
  items: string;
  speed?: "slow" | "normal" | "fast" | null;
  pauseOnHover?: boolean | null;
}

export interface RatingBlock {
  __component: "shared.rating";
  id: number;
  value: "1" | "2" | "3" | "4" | "5";
  label?: string | null;
  align?: "left" | "center" | "right" | null;
}

export interface ChartBlock {
  __component: "shared.chart";
  id: number;
  title?: string | null;
  dataJson: string;
  variant?: "bar" | "horizontal" | null;
}

/* -------------------------------------------------------------------------- */
/* Site sections (exact-replica public-portal page sections)                 */
/* -------------------------------------------------------------------------- */

export interface SiteHomeHeroBlock {
  __component: "site.home-hero";
  id: number;
  badge?: string | null;
  title: string;
  titleHighlight?: string | null;
  description?: string | null;
  fileNewCaseLabel?: string | null;
  trackCaseStatusLabel?: string | null;
  imageUrl?: string | null;
  buildingCaption?: string | null;
}

export interface SiteHomeSearchBlock {
  __component: "site.home-search";
  id: number;
  title?: string | null;
  description?: string | null;
  searchByDateLabel?: string | null;
  searchByPartyLabel?: string | null;
}

export interface SiteHomeAboutUsBlock {
  __component: "site.home-about-us";
  id: number;
  badge?: string | null;
  heading?: string | null;
  description?: string | null;
  visionHeading?: string | null;
  visionText?: string | null;
  missionHeading?: string | null;
  missionText?: string | null;
  ctaLabel?: string | null;
  ctaUrl?: string | null;
  videoUrl?: string | null;
}

export interface SiteHomeFeeCalculatorBlock {
  __component: "site.home-fee-calculator";
  id: number;
  badge?: string | null;
  title?: string | null;
  description?: string | null;
}

export interface SiteHomeFeaturesBlock {
  __component: "site.home-features";
  id: number;
  feature1Title?: string | null;
  feature1Description?: string | null;
  feature2Title?: string | null;
  feature2Description?: string | null;
  feature3Title?: string | null;
  feature3Description?: string | null;
  feature4Title?: string | null;
  feature4Description?: string | null;
}

export interface SiteHomeUpdatesBlock {
  __component: "site.home-updates";
  id: number;
  title?: string | null;
  viewAllLabel?: string | null;
  readMoreLabel?: string | null;
}

export interface SiteHomeCoreFeaturesBlock {
  __component: "site.home-core-features";
  id: number;
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  learnMoreLabel?: string | null;
  item1Title?: string | null;
  item1Description?: string | null;
  item2Title?: string | null;
  item2Description?: string | null;
  item3Title?: string | null;
  item3Description?: string | null;
}

export interface SiteHomeStatsBlock {
  __component: "site.home-stats";
  id: number;
  stat1Value?: string | null;
  stat1Label?: string | null;
  stat2Value?: string | null;
  stat2Label?: string | null;
  stat3Value?: string | null;
  stat3Label?: string | null;
  stat4Value?: string | null;
  stat4Label?: string | null;
}

export interface SiteHomeFaqBlock {
  __component: "site.home-faq";
  id: number;
  title?: string | null;
  description?: string | null;
  viewAllLabel?: string | null;
  faq1?: string | null;
  faq2?: string | null;
  faq3?: string | null;
  faq4?: string | null;
  faq5?: string | null;
}

export interface SiteHomeCtaBlock {
  __component: "site.home-cta";
  id: number;
  heading?: string | null;
  description?: string | null;
  primaryButtonLabel?: string | null;
  secondaryButtonLabel?: string | null;
  newsletterHeading?: string | null;
  newsletterDescription?: string | null;
  emailPlaceholder?: string | null;
  subscribeButtonLabel?: string | null;
  disclaimerText?: string | null;
}

export interface SiteHomeContactInfoBlock {
  __component: "site.home-contact-info";
  id: number;
  visitTitle?: string | null;
  visitAddress?: string | null;
  visitActionLabel?: string | null;
  callTitle?: string | null;
  callPhone?: string | null;
  callHours?: string | null;
  callActionLabel?: string | null;
  callHref?: string | null;
  emailTitle?: string | null;
  emailAddress?: string | null;
  emailResponseTime?: string | null;
  emailActionLabel?: string | null;
  emailHref?: string | null;
}

export interface SiteAboutHeroBlock {
  __component: "site.about-hero";
  id: number;
  title: string;
  description?: string | null;
}

export interface SiteAboutQuickLinksBlock {
  __component: "site.about-quick-links";
  id: number;
  link1Title?: string | null;
  link1Description?: string | null;
  link1Url?: string | null;
  link1Label?: string | null;
  link2Title?: string | null;
  link2Description?: string | null;
  link2Url?: string | null;
  link2Label?: string | null;
}

export interface SiteAboutBodyBlock {
  __component: "site.about-body";
  id: number;
  heading?: string | null;
  paragraph1?: string | null;
  paragraph2?: string | null;
  paragraph3?: string | null;
  imageUrl?: string | null;
}

export interface SiteContactHeroBlock {
  __component: "site.contact-hero";
  id: number;
  title: string;
  description?: string | null;
}

export interface SiteContactInfoAndFormBlock {
  __component: "site.contact-info-and-form";
  id: number;
  infoHeading?: string | null;
  infoDescription?: string | null;
  addressTitle?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  addressLine3?: string | null;
  phoneTitle?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  emailTitle?: string | null;
  email1?: string | null;
  email2?: string | null;
  hoursTitle?: string | null;
  hoursLine1?: string | null;
  hoursLine2?: string | null;
  formHeading?: string | null;
  submitLabel?: string | null;
  successMessage?: string | null;
}

export interface SiteContactMapBlock {
  __component: "site.contact-map";
  id: number;
  heading?: string | null;
  placeholderText?: string | null;
}

export interface SiteServicesHeroBlock {
  __component: "site.services-hero";
  id: number;
  title: string;
  description?: string | null;
}

export interface SiteServicesGridBlock {
  __component: "site.services-grid";
  id: number;
  service1Title?: string | null;
  service1Description?: string | null;
  service1Features?: string | null;
  service2Title?: string | null;
  service2Description?: string | null;
  service2Features?: string | null;
  service3Title?: string | null;
  service3Description?: string | null;
  service3Features?: string | null;
  service4Title?: string | null;
  service4Description?: string | null;
  service4Features?: string | null;
  service5Title?: string | null;
  service5Description?: string | null;
  service5Features?: string | null;
  service6Title?: string | null;
  service6Description?: string | null;
  service6Features?: string | null;
}

export interface SiteServicesFeeCalculatorBlock {
  __component: "site.services-fee-calculator";
  id: number;
  heading?: string | null;
  description?: string | null;
}

export interface SiteServicesAdditionalBlock {
  __component: "site.services-additional";
  id: number;
  heading?: string | null;
  description?: string | null;
  item1Title?: string | null;
  item1Description?: string | null;
  item2Title?: string | null;
  item2Description?: string | null;
  item3Title?: string | null;
  item3Description?: string | null;
  item4Title?: string | null;
  item4Description?: string | null;
}

export interface SiteAboutSubpageHeroBlock {
  __component: "site.about-subpage-hero";
  id: number;
  backLabel?: string | null;
  backUrl?: string | null;
  title: string;
  subtitle?: string | null;
}

export interface SiteAboutPresidentMessageBlock {
  __component: "site.about-president-message";
  id: number;
  imageUrl?: string | null;
  imageCaptionTitle?: string | null;
  imageCaptionSubtitle?: string | null;
  quoteText?: string | null;
  bodyHeading?: string | null;
  bodyParagraph1?: string | null;
  bodyParagraph2?: string | null;
  bodyParagraph3?: string | null;
  bodyParagraph4?: string | null;
  commitmentHeading?: string | null;
  commitment1?: string | null;
  commitment2?: string | null;
  commitment3?: string | null;
  commitment4?: string | null;
}

export interface SiteAboutVisionSectionBlock {
  __component: "site.about-vision-section";
  id: number;
  heading?: string | null;
  text?: string | null;
}

export interface SiteAboutMissionSectionBlock {
  __component: "site.about-mission-section";
  id: number;
  heading?: string | null;
  text?: string | null;
  pillar1Title?: string | null;
  pillar1Description?: string | null;
  pillar2Title?: string | null;
  pillar2Description?: string | null;
  pillar3Title?: string | null;
  pillar3Description?: string | null;
}

export interface SiteAboutCoreValuesSectionBlock {
  __component: "site.about-core-values-section";
  id: number;
  heading?: string | null;
  description?: string | null;
  value1Title?: string | null;
  value1Description?: string | null;
  value2Title?: string | null;
  value2Description?: string | null;
  value3Title?: string | null;
  value3Description?: string | null;
  value4Title?: string | null;
  value4Description?: string | null;
}

export interface SiteAboutImageBannerBlock {
  __component: "site.about-image-banner";
  id: number;
  imageUrl?: string | null;
  captionTitle?: string | null;
  captionText?: string | null;
}

export interface SiteCaseSearchWidgetBlock {
  __component: "site.case-search-widget";
  id: number;
  heading?: string | null;
  description?: string | null;
}

export interface SiteFeeCalculatorWidgetBlock {
  __component: "site.fee-calculator-widget";
  id: number;
  heading?: string | null;
  description?: string | null;
}

/* -------------------------------------------------------------------------- */
/* Union                                                                      */
/* -------------------------------------------------------------------------- */

export type ContentBlock =
  | HeroBlock
  | RichTextBlock
  | LexicalRichTextBlock
  | MediaBlock
  | QuoteBlock
  | SliderBlock
  | CtaBlock
  | AdvancedHeadingBlock
  | AnimatedHeadlineBlock
  | AlertBlock
  | AccordionBlock
  | TabsBlock
  | IconBoxBlock
  | ImageBoxBlock
  | ContentCardsBlock
  | CodeHighlightBlock
  | DataTableBlock
  | SpacerBlock
  | FeaturesGridBlock
  | FaqBlock
  | TestimonialsBlock
  | ReviewsBlock
  | StatsBlock
  | TeamBlock
  | PricingBlock
  | PriceListBlock
  | FlipBoxesBlock
  | NewsletterBlock
  | LinkInBioBlock
  | CountdownBlock
  | GalleryBlock
  | VideoEmbedBlock
  | VideoPlaylistBlock
  | LogoCloudBlock
  | LottieBlock
  | GoogleMapsBlock
  | HotspotBlock
  | PortfolioBlock
  | ContactFormBlock
  | LoginFormBlock
  | SearchBarBlock
  | OffCanvasBlock
  | ProgressBarsBlock
  | ProgressTrackerBlock
  | PostsBlock
  | LoopGridBlock
  | LoopCarouselBlock
  | TaxonomyFilterBlock
  | PostListBlock
  | PostTimelineBlock
  | FeaturedPostBlock
  | NewsTickerBlock
  | CategoryCardsBlock
  | RelatedPostsBlock
  | AuthorBoxBlock
  | ContentTickerBlock
  | ImageAccordionBlock
  | DualButtonBlock
  | ProtectedContentBlock
  | ReadingProgressBlock
  | BackToTopBlock
  | BusinessHoursBlock
  | ToggleBlock
  | ContentToggleBlock
  | NumberCounterBlock
  | CircleCounterBlock
  | PostSliderBlock
  | VideoSliderBlock
  | FilterablePortfolioBlock
  | PostNavigationBlock
  | ReadingTimeBlock
  | LogoBlock
  | IconBlock
  | BlurbBlock
  | DropdownBlock
  | PromoBoxBlock
  | BreadcrumbsBlock
  | MenuBlock
  | MenuAnchorBlock
  | ShareButtonsBlock
  | SitemapBlock
  | SocialIconsBlock
  | TableOfContentsBlock
  | SectionBlock
  | ColumnsBlock
  | HeaderBlock
  | FooterBlock
  | ButtonBlock
  | ButtonGroupBlock
  | DividerBlock
  | IconListBlock
  | HtmlEmbedBlock
  | IframeEmbedBlock
  | BannerBlock
  | TimelineBlock
  | StepsBlock
  | BeforeAfterBlock
  | ModalBlock
  | AudioPlayerBlock
  | FileDownloadBlock
  | MarqueeBlock
  | RatingBlock
  | ChartBlock
  | SiteHomeHeroBlock
  | SiteHomeSearchBlock
  | SiteHomeAboutUsBlock
  | SiteHomeFeeCalculatorBlock
  | SiteHomeFeaturesBlock
  | SiteHomeUpdatesBlock
  | SiteHomeCoreFeaturesBlock
  | SiteHomeStatsBlock
  | SiteHomeFaqBlock
  | SiteHomeCtaBlock
  | SiteHomeContactInfoBlock
  | SiteAboutHeroBlock
  | SiteAboutQuickLinksBlock
  | SiteAboutBodyBlock
  | SiteContactHeroBlock
  | SiteContactInfoAndFormBlock
  | SiteContactMapBlock
  | SiteServicesHeroBlock
  | SiteServicesGridBlock
  | SiteServicesFeeCalculatorBlock
  | SiteServicesAdditionalBlock
  | SiteAboutSubpageHeroBlock
  | SiteAboutPresidentMessageBlock
  | SiteAboutVisionSectionBlock
  | SiteAboutMissionSectionBlock
  | SiteAboutCoreValuesSectionBlock
  | SiteAboutImageBannerBlock
  | SiteCaseSearchWidgetBlock
  | SiteFeeCalculatorWidgetBlock;
