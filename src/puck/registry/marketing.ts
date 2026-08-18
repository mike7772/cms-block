import FeaturesGridBlock from "@/components/blocks/features-grid-block";
import FaqBlock from "@/components/blocks/faq-block";
import TestimonialsBlock from "@/components/blocks/testimonials-block";
import ReviewsBlock from "@/components/blocks/reviews-block";
import StatsBlock from "@/components/blocks/stats-block";
import TeamBlock from "@/components/blocks/team-block";
import PricingBlock from "@/components/blocks/pricing-block";
import PriceListBlock from "@/components/blocks/price-list-block";
import FlipBoxesBlock from "@/components/blocks/flip-boxes-block";
import NewsletterBlock from "@/components/blocks/newsletter-block";
import LinkInBioBlock from "@/components/blocks/link-in-bio-block";
import CountdownBlock from "@/components/blocks/countdown-block";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";
import type {
  CountdownBlock as CountdownBlockType,
  FaqBlock as FaqBlockType,
  FeaturesGridBlock as FeaturesGridBlockType,
  FlipBoxesBlock as FlipBoxesBlockType,
  LinkInBioBlock as LinkInBioBlockType,
  NewsletterBlock as NewsletterBlockType,
  PriceListBlock as PriceListBlockType,
  PricingBlock as PricingBlockType,
  ReviewsBlock as ReviewsBlockType,
  StatsBlock as StatsBlockType,
  TeamBlock as TeamBlockType,
  TestimonialsBlock as TestimonialsBlockType,
} from "@/lib/types";

/* -------------------------------------------------------------------------- */
/* Features Grid                                                              */
/* -------------------------------------------------------------------------- */

type FeaturesGridProps = {
  heading: string;
  subheading: string;
  columns: string;
  features: Array<{
    iconUrl: string;
    title: string;
    description: string;
    linkUrl: string;
    linkLabel: string;
  }>;
};

function featuresGridFromBlock(block: FeaturesGridBlockType): FeaturesGridProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    columns: block.columns ?? "3",
    features: (block.features ?? []).map((f) => ({
      iconUrl: stripMediaUrl(f.icon),
      title: f.title ?? "",
      description: f.description ?? "",
      linkUrl: f.linkUrl ?? "",
      linkLabel: f.linkLabel ?? "",
    })),
  };
}

function featuresGridToBlock(props: FeaturesGridProps): FeaturesGridBlockType {
  return {
    __component: "shared.features-grid",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    columns: (props.columns as "2" | "3" | "4") || null,
    features: (props.features ?? []).map((f) => ({
      icon: stubMedia(f.iconUrl),
      title: f.title,
      description: f.description || null,
      linkUrl: f.linkUrl || null,
      linkLabel: f.linkLabel || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

type FaqProps = {
  heading: string;
  subheading: string;
  items: Array<{ question: string; answer: string }>;
};

function faqFromBlock(block: FaqBlockType): FaqProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    items: (block.items ?? []).map((item) => ({
      question: item.question ?? "",
      answer: item.answer ?? "",
    })),
  };
}

function faqToBlock(props: FaqProps): FaqBlockType {
  return {
    __component: "shared.faq",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    items: (props.items ?? []).map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Testimonials                                                               */
/* -------------------------------------------------------------------------- */

type TestimonialsProps = {
  heading: string;
  subheading: string;
  layout: string;
  testimonials: Array<{
    quote: string;
    authorName: string;
    authorRole: string;
    avatarUrl: string;
    rating: string;
  }>;
};

function testimonialsFromBlock(
  block: TestimonialsBlockType,
): TestimonialsProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    layout: block.layout ?? "carousel",
    testimonials: (block.testimonials ?? []).map((t) => ({
      quote: t.quote ?? "",
      authorName: t.authorName ?? "",
      authorRole: t.authorRole ?? "",
      avatarUrl: stripMediaUrl(t.avatar),
      rating: t.rating ?? "5",
    })),
  };
}

function testimonialsToBlock(
  props: TestimonialsProps,
): TestimonialsBlockType {
  return {
    __component: "shared.testimonials",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    layout: (props.layout as "carousel" | "grid") || null,
    testimonials: (props.testimonials ?? []).map((t) => ({
      quote: t.quote,
      authorName: t.authorName,
      authorRole: t.authorRole || null,
      avatar: stubMedia(t.avatarUrl),
      rating: (t.rating as "1" | "2" | "3" | "4" | "5") || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Reviews                                                                    */
/* -------------------------------------------------------------------------- */

type ReviewsProps = {
  heading: string;
  subheading: string;
  layout: string;
  columns: string;
  showAverageRating: boolean;
  reviews: Array<{
    authorName: string;
    authorAvatarUrl: string;
    rating: string;
    title: string;
    body: string;
    date: string;
    source: string;
  }>;
};

function reviewsFromBlock(block: ReviewsBlockType): ReviewsProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    layout: block.layout ?? "grid",
    columns: block.columns ?? "3",
    showAverageRating: block.showAverageRating ?? true,
    reviews: (block.reviews ?? []).map((r) => ({
      authorName: r.authorName ?? "",
      authorAvatarUrl: stripMediaUrl(r.authorAvatar),
      rating: r.rating ?? "5",
      title: r.title ?? "",
      body: r.body ?? "",
      date: r.date ?? "",
      source: r.source ?? "internal",
    })),
  };
}

function reviewsToBlock(props: ReviewsProps): ReviewsBlockType {
  return {
    __component: "shared.reviews",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    layout: (props.layout as "grid" | "carousel" | "list") || null,
    columns: (props.columns as "2" | "3" | "4") || null,
    showAverageRating: props.showAverageRating,
    reviews: (props.reviews ?? []).map((r) => ({
      authorName: r.authorName,
      authorAvatar: stubMedia(r.authorAvatarUrl),
      rating: (r.rating as "1" | "2" | "3" | "4" | "5") || "5",
      title: r.title || null,
      body: r.body,
      date: r.date || null,
      source:
        (r.source as "google" | "facebook" | "internal" | "other") || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Stats                                                                      */
/* -------------------------------------------------------------------------- */

type StatsProps = {
  heading: string;
  subheading: string;
  backgroundImageUrl: string;
  stats: Array<{
    value: string;
    suffix: string;
    label: string;
    iconUrl: string;
  }>;
};

function statsFromBlock(block: StatsBlockType): StatsProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    backgroundImageUrl: stripMediaUrl(block.backgroundImage),
    stats: (block.stats ?? []).map((s) => ({
      value: s.value ?? "",
      suffix: s.suffix ?? "",
      label: s.label ?? "",
      iconUrl: stripMediaUrl(s.icon),
    })),
  };
}

function statsToBlock(props: StatsProps): StatsBlockType {
  return {
    __component: "shared.stats",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    backgroundImage: stubMedia(props.backgroundImageUrl),
    stats: (props.stats ?? []).map((s) => ({
      value: s.value,
      suffix: s.suffix || null,
      label: s.label,
      icon: stubMedia(s.iconUrl),
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Team                                                                       */
/* -------------------------------------------------------------------------- */

type TeamProps = {
  heading: string;
  subheading: string;
  columns: string;
  members: Array<{
    name: string;
    role: string;
    photoUrl: string;
    bio: string;
    email: string;
    linkedinUrl: string;
    twitterUrl: string;
  }>;
};

function teamFromBlock(block: TeamBlockType): TeamProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    columns: block.columns ?? "3",
    members: (block.members ?? []).map((m) => ({
      name: m.name ?? "",
      role: m.role ?? "",
      photoUrl: stripMediaUrl(m.photo),
      bio: m.bio ?? "",
      email: m.email ?? "",
      linkedinUrl: m.linkedinUrl ?? "",
      twitterUrl: m.twitterUrl ?? "",
    })),
  };
}

function teamToBlock(props: TeamProps): TeamBlockType {
  return {
    __component: "shared.team",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    columns: (props.columns as "2" | "3" | "4") || null,
    members: (props.members ?? []).map((m) => ({
      name: m.name,
      role: m.role || null,
      photo: stubMedia(m.photoUrl),
      bio: m.bio || null,
      email: m.email || null,
      linkedinUrl: m.linkedinUrl || null,
      twitterUrl: m.twitterUrl || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Pricing                                                                    */
/* -------------------------------------------------------------------------- */

function featuresToText(features: unknown): string {
  if (Array.isArray(features)) {
    return features.map(String).join("\n");
  }
  if (typeof features === "string") return features;
  return "";
}

function textToFeatures(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

type PricingProps = {
  heading: string;
  subheading: string;
  columns: string;
  plans: Array<{
    planName: string;
    price: string;
    period: string;
    description: string;
    featuresText: string;
    isFeatured: boolean;
    buttonLabel: string;
    buttonUrl: string;
  }>;
};

function pricingFromBlock(block: PricingBlockType): PricingProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    columns: block.columns ?? "3",
    plans: (block.plans ?? []).map((p) => ({
      planName: p.planName ?? "",
      price: p.price ?? "",
      period: p.period ?? "",
      description: p.description ?? "",
      featuresText: featuresToText(p.features),
      isFeatured: p.isFeatured ?? false,
      buttonLabel: p.buttonLabel ?? "",
      buttonUrl: p.buttonUrl ?? "",
    })),
  };
}

function pricingToBlock(props: PricingProps): PricingBlockType {
  return {
    __component: "shared.pricing",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    columns: (props.columns as "2" | "3" | "4") || null,
    plans: (props.plans ?? []).map((p) => ({
      planName: p.planName,
      price: p.price,
      period: p.period || null,
      description: p.description || null,
      features: textToFeatures(p.featuresText ?? ""),
      isFeatured: p.isFeatured,
      buttonLabel: p.buttonLabel || null,
      buttonUrl: p.buttonUrl || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Price List                                                                 */
/* -------------------------------------------------------------------------- */

type PriceListProps = {
  heading: string;
  subheading: string;
  layout: string;
  items: Array<{
    title: string;
    price: string;
    description: string;
    imageUrl: string;
    isFeatured: boolean;
  }>;
};

function priceListFromBlock(block: PriceListBlockType): PriceListProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    layout: block.layout ?? "single",
    items: (block.items ?? []).map((item) => ({
      title: item.title ?? "",
      price: item.price ?? "",
      description: item.description ?? "",
      imageUrl: stripMediaUrl(item.image),
      isFeatured: item.isFeatured ?? false,
    })),
  };
}

function priceListToBlock(props: PriceListProps): PriceListBlockType {
  return {
    __component: "shared.price-list",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    layout: (props.layout as "single" | "two-column") || null,
    items: (props.items ?? []).map((item) => ({
      title: item.title,
      price: item.price,
      description: item.description || null,
      image: stubMedia(item.imageUrl),
      isFeatured: item.isFeatured,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Flip Boxes                                                                 */
/* -------------------------------------------------------------------------- */

type FlipBoxesProps = {
  heading: string;
  subheading: string;
  columns: string;
  flipDirection: string;
  boxes: Array<{
    frontIconUrl: string;
    frontTitle: string;
    frontDescription: string;
    backTitle: string;
    backDescription: string;
    buttonLabel: string;
    buttonUrl: string;
  }>;
};

function flipBoxesFromBlock(block: FlipBoxesBlockType): FlipBoxesProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    columns: block.columns ?? "3",
    flipDirection: block.flipDirection ?? "horizontal",
    boxes: (block.boxes ?? []).map((b) => ({
      frontIconUrl: stripMediaUrl(b.frontIcon),
      frontTitle: b.frontTitle ?? "",
      frontDescription: b.frontDescription ?? "",
      backTitle: b.backTitle ?? "",
      backDescription: b.backDescription ?? "",
      buttonLabel: b.buttonLabel ?? "",
      buttonUrl: b.buttonUrl ?? "",
    })),
  };
}

function flipBoxesToBlock(props: FlipBoxesProps): FlipBoxesBlockType {
  return {
    __component: "shared.flip-boxes",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    columns: (props.columns as "2" | "3" | "4") || null,
    flipDirection: (props.flipDirection as "horizontal" | "vertical") || null,
    boxes: (props.boxes ?? []).map((b) => ({
      frontIcon: stubMedia(b.frontIconUrl),
      frontTitle: b.frontTitle,
      frontDescription: b.frontDescription || null,
      backTitle: b.backTitle || null,
      backDescription: b.backDescription || null,
      buttonLabel: b.buttonLabel || null,
      buttonUrl: b.buttonUrl || null,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Newsletter                                                                 */
/* -------------------------------------------------------------------------- */

type NewsletterProps = {
  heading: string;
  subheading: string;
  placeholderText: string;
  buttonLabel: string;
  backgroundImageUrl: string;
  layout: string;
};

function newsletterFromBlock(block: NewsletterBlockType): NewsletterProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    placeholderText: block.placeholderText ?? "",
    buttonLabel: block.buttonLabel ?? "",
    backgroundImageUrl: stripMediaUrl(block.backgroundImage),
    layout: block.layout ?? "boxed",
  };
}

function newsletterToBlock(props: NewsletterProps): NewsletterBlockType {
  return {
    __component: "shared.newsletter",
    id: 0,
    heading: props.heading,
    subheading: props.subheading || null,
    placeholderText: props.placeholderText || null,
    buttonLabel: props.buttonLabel,
    backgroundImage: stubMedia(props.backgroundImageUrl),
    layout: (props.layout as "boxed" | "fullwidth" | "inline") || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Link in Bio                                                                */
/* -------------------------------------------------------------------------- */

type LinkInBioProps = {
  profileImageUrl: string;
  name: string;
  bio: string;
  backgroundColor: string;
  buttonStyle: string;
  links: Array<{
    label: string;
    url: string;
    iconUrl: string;
    isFeatured: boolean;
  }>;
};

function linkInBioFromBlock(block: LinkInBioBlockType): LinkInBioProps {
  return {
    profileImageUrl: stripMediaUrl(block.profileImage),
    name: block.name ?? "",
    bio: block.bio ?? "",
    backgroundColor: block.backgroundColor ?? "light",
    buttonStyle: block.buttonStyle ?? "rounded",
    links: (block.links ?? []).map((l) => ({
      label: l.label ?? "",
      url: l.url ?? "",
      iconUrl: stripMediaUrl(l.icon),
      isFeatured: l.isFeatured ?? false,
    })),
  };
}

function linkInBioToBlock(props: LinkInBioProps): LinkInBioBlockType {
  return {
    __component: "shared.link-in-bio",
    id: 0,
    profileImage: stubMedia(props.profileImageUrl),
    name: props.name,
    bio: props.bio || null,
    backgroundColor:
      (props.backgroundColor as "light" | "dark" | "gradient" | "custom") ||
      null,
    buttonStyle:
      (props.buttonStyle as "rounded" | "pill" | "square" | "outline") || null,
    links: (props.links ?? []).map((l) => ({
      label: l.label,
      url: l.url,
      icon: stubMedia(l.iconUrl),
      isFeatured: l.isFeatured,
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Countdown                                                                  */
/* -------------------------------------------------------------------------- */

type CountdownProps = {
  heading: string;
  subheading: string;
  targetDate: string;
  showDays: boolean;
  showHours: boolean;
  showMinutes: boolean;
  showSeconds: boolean;
  expiredMessage: string;
};

function countdownFromBlock(block: CountdownBlockType): CountdownProps {
  return {
    heading: block.heading ?? "",
    subheading: block.subheading ?? "",
    targetDate: block.targetDate ?? "",
    showDays: block.showDays ?? true,
    showHours: block.showHours ?? true,
    showMinutes: block.showMinutes ?? true,
    showSeconds: block.showSeconds ?? true,
    expiredMessage: block.expiredMessage ?? "",
  };
}

function countdownToBlock(props: CountdownProps): CountdownBlockType {
  return {
    __component: "shared.countdown",
    id: 0,
    heading: props.heading || null,
    subheading: props.subheading || null,
    targetDate: props.targetDate,
    showDays: props.showDays,
    showHours: props.showHours,
    showMinutes: props.showMinutes,
    showSeconds: props.showSeconds,
    expiredMessage: props.expiredMessage || null,
  };
}

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export const marketingRegistry: RegistryEntry[] = [
  {
    puckType: "FeaturesGrid",
    strapiComponent: "shared.features-grid",
    label: "Features Grid",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      features: {
        type: "array",
        arrayFields: {
          iconUrl: { type: "text" },
          title: { type: "text" },
          description: { type: "textarea" },
          linkUrl: { type: "text" },
          linkLabel: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Everything you need",
      subheading: "Ship faster with tools that stay out of the way.",
      columns: "3",
      features: [
        {
          iconUrl: "",
          title: "User Management",
          description: "Add and control users efficiently.",
          linkUrl: "/",
          linkLabel: "Manage users",
        },
        {
          iconUrl: "",
          title: "Analytics Dashboard",
          description: "Track performance with clear, actionable insights.",
          linkUrl: "/",
          linkLabel: "View dashboard",
        },
        {
          iconUrl: "",
          title: "Integrations",
          description: "Connect the tools your team already relies on.",
          linkUrl: "/",
          linkLabel: "Browse integrations",
        },
      ],
    },
    fromBlock: featuresGridFromBlock as RegistryEntry["fromBlock"],
    toBlock: featuresGridToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(FeaturesGridBlock, { block: featuresGridToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Faq",
    strapiComponent: "shared.faq",
    label: "FAQ",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      items: {
        type: "array",
        arrayFields: {
          question: { type: "text" },
          answer: { type: "textarea" },
        },
      },
    },
    defaultProps: {
      heading: "Frequently asked questions",
      subheading: "Quick answers to common questions.",
      items: [
        {
          question: "How long does setup take?",
          answer:
            "Most teams are up and running in under an hour. Connect your workspace, invite collaborators, and publish your first page the same day.",
        },
        {
          question: "Can I change plans later?",
          answer:
            "Yes. You can upgrade or downgrade anytime from billing settings. Changes take effect on your next billing cycle, and unused time is prorated.",
        },
        {
          question: "How do I get support?",
          answer:
            "Every plan includes email support. Pro and Business plans add priority response and a dedicated success channel for faster help.",
        },
      ],
    },
    fromBlock: faqFromBlock as RegistryEntry["fromBlock"],
    toBlock: faqToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(FaqBlock, { block: faqToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Testimonials",
    strapiComponent: "shared.testimonials",
    label: "Testimonials",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      layout: selectField(["carousel", "grid"]),
      testimonials: {
        type: "array",
        arrayFields: {
          quote: { type: "textarea" },
          authorName: { type: "text" },
          authorRole: { type: "text" },
          avatarUrl: { type: "text" },
          rating: selectField(["1", "2", "3", "4", "5"]),
        },
      },
    },
    defaultProps: {
      heading: "Trusted by modern teams",
      subheading: "See why product teams choose our platform.",
      layout: "carousel",
      testimonials: [
        {
          quote:
            "We replaced a patchwork of templates with one coherent system. Our marketing pages finally look finished on day one, and launches no longer wait on engineering.",
          authorName: "Maya Chen",
          authorRole: "Head of Product, Northwind",
          avatarUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
          rating: "5",
        },
        {
          quote:
            "The block library is the closest thing we've found to a design system for content. Editors stay productive, and brand stays consistent across every page.",
          authorName: "Jordan Blake",
          authorRole: "VP Marketing, Contoso",
          avatarUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
          rating: "5",
        },
      ],
    },
    fromBlock: testimonialsFromBlock as RegistryEntry["fromBlock"],
    toBlock: testimonialsToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(TestimonialsBlock, { block: testimonialsToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Reviews",
    strapiComponent: "shared.reviews",
    label: "Reviews",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      layout: selectField(["grid", "carousel", "list"]),
      columns: selectField(["2", "3", "4"]),
      showAverageRating: boolField(),
      reviews: {
        type: "array",
        arrayFields: {
          authorName: { type: "text" },
          authorAvatarUrl: { type: "text" },
          rating: selectField(["1", "2", "3", "4", "5"]),
          title: { type: "text" },
          body: { type: "textarea" },
          date: { type: "text" },
          source: selectField(["google", "facebook", "internal", "other"]),
        },
      },
    },
    defaultProps: {
      heading: "Customer reviews",
      subheading: "Real feedback from teams using the platform.",
      layout: "grid",
      columns: "3",
      showAverageRating: true,
      reviews: [
        {
          authorName: "Priya Nair",
          authorAvatarUrl:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
          rating: "5",
          title: "Polished out of the box",
          body: "Dropped in a features grid and pricing section and they already looked production-ready. Huge time saver for our launch.",
          date: "Mar 12, 2025",
          source: "internal",
        },
        {
          authorName: "Chris Ortega",
          authorAvatarUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
          rating: "5",
          title: "Editors love it",
          body: "Non-technical teammates publish confidently now. The defaults feel intentional instead of placeholder-y.",
          date: "Feb 28, 2025",
          source: "google",
        },
        {
          authorName: "Sam Rivera",
          authorAvatarUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
          rating: "4",
          title: "Fast path to ship",
          body: "We went from blank canvas to a credible marketing page in an afternoon. Support was responsive when we needed custom tweaks.",
          date: "Jan 19, 2025",
          source: "internal",
        },
      ],
    },
    fromBlock: reviewsFromBlock as RegistryEntry["fromBlock"],
    toBlock: reviewsToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(ReviewsBlock, { block: reviewsToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Stats",
    strapiComponent: "shared.stats",
    label: "Stats",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      backgroundImageUrl: { type: "text" },
      stats: {
        type: "array",
        arrayFields: {
          value: { type: "text" },
          suffix: { type: "text" },
          label: { type: "text" },
          iconUrl: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "By the numbers",
      subheading: "Results that speak for themselves.",
      backgroundImageUrl: "",
      stats: [
        { value: "2.4", suffix: "k", label: "Teams", iconUrl: "" },
        { value: "99.9", suffix: "%", label: "Uptime", iconUrl: "" },
        { value: "4.9", suffix: "", label: "Rating", iconUrl: "" },
      ],
    },
    fromBlock: statsFromBlock as RegistryEntry["fromBlock"],
    toBlock: statsToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(StatsBlock, { block: statsToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Team",
    strapiComponent: "shared.team",
    label: "Team",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      members: {
        type: "array",
        arrayFields: {
          name: { type: "text" },
          role: { type: "text" },
          photoUrl: { type: "text" },
          bio: { type: "textarea" },
          email: { type: "text" },
          linkedinUrl: { type: "text" },
          twitterUrl: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Meet the team",
      subheading: "The people building the product.",
      columns: "3",
      members: [
        {
          name: "Maya Chen",
          role: "Head of Product",
          photoUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
          bio: "Leads product strategy and the block library that keeps every page feeling finished.",
          email: "",
          linkedinUrl: "",
          twitterUrl: "",
        },
        {
          name: "Jordan Blake",
          role: "Engineering Lead",
          photoUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
          bio: "Builds the editor experience and publishing pipeline teams rely on daily.",
          email: "",
          linkedinUrl: "",
          twitterUrl: "",
        },
        {
          name: "Priya Nair",
          role: "Design Director",
          photoUrl:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
          bio: "Shapes the visual system so defaults look intentional from the first drop.",
          email: "",
          linkedinUrl: "",
          twitterUrl: "",
        },
      ],
    },
    fromBlock: teamFromBlock as RegistryEntry["fromBlock"],
    toBlock: teamToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(TeamBlock, { block: teamToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Pricing",
    strapiComponent: "shared.pricing",
    label: "Pricing",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      plans: {
        type: "array",
        arrayFields: {
          planName: { type: "text" },
          price: { type: "text" },
          period: { type: "text" },
          description: { type: "textarea" },
          featuresText: { type: "textarea" },
          isFeatured: boolField(),
          buttonLabel: { type: "text" },
          buttonUrl: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Simple, transparent pricing",
      subheading: "Choose the plan that fits your team.",
      columns: "3",
      plans: [
        {
          planName: "Starter",
          price: "$19",
          period: "/mo",
          description: "For individuals and side projects",
          featuresText:
            "Core content blocks\n1 workspace\nEmail support\nPublish to one site",
          isFeatured: false,
          buttonLabel: "Start free",
          buttonUrl: "/",
        },
        {
          planName: "Pro",
          price: "$49",
          period: "/mo",
          description: "For growing product teams",
          featuresText:
            "Everything in Starter\nUnlimited pages\nTeam roles & permissions\nPriority support\nCustom domains",
          isFeatured: true,
          buttonLabel: "Choose Pro",
          buttonUrl: "/",
        },
        {
          planName: "Business",
          price: "$99",
          period: "/mo",
          description: "For organizations at scale",
          featuresText:
            "Everything in Pro\nSSO & audit logs\nDedicated success manager\nAdvanced integrations\nSLA-backed uptime",
          isFeatured: false,
          buttonLabel: "Contact sales",
          buttonUrl: "/",
        },
      ],
    },
    fromBlock: pricingFromBlock as RegistryEntry["fromBlock"],
    toBlock: pricingToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(PricingBlock, { block: pricingToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "PriceList",
    strapiComponent: "shared.price-list",
    label: "Price List",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      layout: selectField(["single", "two-column"]),
      items: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          price: { type: "text" },
          description: { type: "textarea" },
          imageUrl: { type: "text" },
          isFeatured: boolField(),
        },
      },
    },
    defaultProps: {
      heading: "Services",
      subheading: "Transparent rates for common engagements.",
      layout: "single",
      items: [
        {
          title: "Consultation",
          price: "$150",
          description:
            "A focused session to map your content model, page goals, and rollout plan.",
          imageUrl: "",
          isFeatured: false,
        },
        {
          title: "Setup",
          price: "$499",
          description:
            "We configure your workspace, templates, and publishing flow so your team can ship immediately.",
          imageUrl: "",
          isFeatured: true,
        },
        {
          title: "Ongoing support",
          price: "$99/mo",
          description:
            "Monthly guidance for new pages, design tweaks, and editor training as your site grows.",
          imageUrl: "",
          isFeatured: false,
        },
      ],
    },
    fromBlock: priceListFromBlock as RegistryEntry["fromBlock"],
    toBlock: priceListToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(PriceListBlock, { block: priceListToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "FlipBoxes",
    strapiComponent: "shared.flip-boxes",
    label: "Flip Boxes",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      columns: selectField(["2", "3", "4"]),
      flipDirection: selectField(["horizontal", "vertical"]),
      boxes: {
        type: "array",
        arrayFields: {
          frontIconUrl: { type: "text" },
          frontTitle: { type: "text" },
          frontDescription: { type: "textarea" },
          backTitle: { type: "text" },
          backDescription: { type: "textarea" },
          buttonLabel: { type: "text" },
          buttonUrl: { type: "text" },
        },
      },
    },
    defaultProps: {
      heading: "Explore capabilities",
      subheading: "Hover to learn more.",
      columns: "3",
      flipDirection: "horizontal",
      boxes: [
        {
          frontIconUrl: "",
          frontTitle: "Analytics",
          frontDescription: "See what converts across every page.",
          backTitle: "Actionable insights",
          backDescription:
            "Track engagement, drop-offs, and content performance with dashboards built for product teams.",
          buttonLabel: "View docs",
          buttonUrl: "/",
        },
        {
          frontIconUrl: "",
          frontTitle: "Security",
          frontDescription: "Protect accounts and content by default.",
          backTitle: "Enterprise-ready controls",
          backDescription:
            "Role-based access, SSO options, and audit trails keep publishing safe as your team scales.",
          buttonLabel: "View docs",
          buttonUrl: "/",
        },
        {
          frontIconUrl: "",
          frontTitle: "Automation",
          frontDescription: "Reduce repetitive publishing work.",
          backTitle: "Workflows that save time",
          backDescription:
            "Schedule releases, sync content, and trigger reviews so launches stay on track without busywork.",
          buttonLabel: "View docs",
          buttonUrl: "/",
        },
      ],
    },
    fromBlock: flipBoxesFromBlock as RegistryEntry["fromBlock"],
    toBlock: flipBoxesToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(FlipBoxesBlock, { block: flipBoxesToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Newsletter",
    strapiComponent: "shared.newsletter",
    label: "Newsletter",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      placeholderText: { type: "text" },
      buttonLabel: { type: "text" },
      backgroundImageUrl: { type: "text" },
      layout: selectField(["boxed", "fullwidth", "inline"]),
    },
    defaultProps: {
      heading: "Stay in the loop",
      subheading: "Product updates, tips, and release notes—no spam.",
      placeholderText: "you@example.com",
      buttonLabel: "Subscribe",
      backgroundImageUrl: "",
      layout: "boxed",
    },
    fromBlock: newsletterFromBlock as RegistryEntry["fromBlock"],
    toBlock: newsletterToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(NewsletterBlock, { block: newsletterToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "LinkInBio",
    strapiComponent: "shared.link-in-bio",
    label: "Link in Bio",
    category: "Marketing",
    fields: {
      profileImageUrl: { type: "text" },
      name: { type: "text" },
      bio: { type: "textarea" },
      backgroundColor: selectField(["light", "dark", "gradient", "custom"]),
      buttonStyle: selectField(["rounded", "pill", "square", "outline"]),
      links: {
        type: "array",
        arrayFields: {
          label: { type: "text" },
          url: { type: "text" },
          iconUrl: { type: "text" },
          isFeatured: boolField(),
        },
      },
    },
    defaultProps: {
      profileImageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      name: "Alex Morgan",
      bio: "Product designer & builder.",
      backgroundColor: "light",
      buttonStyle: "rounded",
      links: [
        { label: "Portfolio", url: "/", iconUrl: "", isFeatured: true },
        { label: "Newsletter", url: "/", iconUrl: "", isFeatured: false },
        { label: "Contact", url: "/", iconUrl: "", isFeatured: false },
      ],
    },
    fromBlock: linkInBioFromBlock as RegistryEntry["fromBlock"],
    toBlock: linkInBioToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(LinkInBioBlock, { block: linkInBioToBlock(props) }),
  } as RegistryEntry,

  {
    puckType: "Countdown",
    strapiComponent: "shared.countdown",
    label: "Countdown",
    category: "Marketing",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      targetDate: { type: "text" },
      showDays: boolField(),
      showHours: boolField(),
      showMinutes: boolField(),
      showSeconds: boolField(),
      expiredMessage: { type: "text" },
    },
    defaultProps: {
      heading: "Early access closes soon",
      subheading: "Join the waitlist before seats fill up.",
      targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      showDays: true,
      showHours: true,
      showMinutes: true,
      showSeconds: true,
      expiredMessage: "This event has ended.",
    },
    fromBlock: countdownFromBlock as RegistryEntry["fromBlock"],
    toBlock: countdownToBlock as RegistryEntry["toBlock"],
    render: (props: any) => createElement(CountdownBlock, { block: countdownToBlock(props) }),
  } as RegistryEntry,
];
