import { createElement, type ReactNode } from "react";
import type { Config, Fields } from "@puckeditor/core";
import BlockStyleShell from "@/components/puck/block-style-shell";
import { blockStyleFields, type BlockStyle, type BlockAdvanced } from "@/puck/block-style";
import {
  HomeHeroSection,
  HomeAboutUsSection,
  HomeFeaturesSection,
  HomeUpdatesSection,
  HomeCoreFeaturesSection,
  HomeStatsSection,
  HomeFaqSection,
  HomeCtaSection,
  HomeContactInfoSection,
  type HomeHeroProps,
  type HomeAboutUsProps,
  type HomeFeaturesProps,
  type HomeUpdatesProps,
  type HomeCoreFeaturesProps,
  type HomeStatsProps,
  type HomeFaqProps,
  type HomeCtaProps,
  type HomeContactInfoProps,
} from "@/components/site-sections/home";
import {
  AboutHeroSection,
  AboutQuickLinksSection,
  AboutBodySection,
  type AboutHeroProps,
  type AboutQuickLinksProps,
  type AboutBodyProps,
} from "@/components/site-sections/about";
import {
  ContactHeroSection,
  ContactInfoAndFormSection,
  ContactMapSection,
  type ContactHeroProps,
  type ContactInfoAndFormProps,
  type ContactMapProps,
} from "@/components/site-sections/contact";
import {
  ServicesHeroSection,
  ServicesGridSection,
  ServicesAdditionalSection,
  type ServicesHeroProps,
  type ServicesGridProps,
  type ServicesAdditionalProps,
} from "@/components/site-sections/services";

type StyledProps = { style?: BlockStyle; advanced?: BlockAdvanced };

function siteSection<P extends object>(
  label: string,
  Component: (props: P) => ReactNode,
  fields: Fields,
  defaultProps: P,
): NonNullable<Config["components"]>[string] {
  return {
    label,
    fields: { ...fields, ...blockStyleFields },
    defaultProps: { ...defaultProps, style: {}, advanced: {} },
    render: ((props: Record<string, unknown>) => {
      const { style, advanced, ...rest } = props as P & StyledProps;
      return createElement(BlockStyleShell, {
        style,
        advanced,
        children: createElement(Component, rest as P),
      });
    }) as NonNullable<Config["components"]>[string]["render"],
  };
}

const text = { type: "text" as const };
const textarea = { type: "textarea" as const };

export const siteSectionComponents: NonNullable<Config["components"]> = {
  HomeHero: siteSection<HomeHeroProps>(
    "Home: Hero",
    HomeHeroSection,
    {
      badge: text,
      title: text,
      titleHighlight: text,
      description: textarea,
      fileNewCaseLabel: text,
      trackCaseStatusLabel: text,
      imageUrl: text,
      buildingCaption: text,
    },
    {
      badge: "Serving Justice Since 1995",
      title: "Access Justice",
      titleHighlight: "Anytime, Anywhere",
      description:
        "Our electronic case management system provides seamless access to court services, ensuring transparency and efficiency in the judicial process.",
      fileNewCaseLabel: "File a New Case",
      trackCaseStatusLabel: "Track Case Status",
      imageUrl: "/images/court-building.png",
      buildingCaption: "Supreme Court of Oromia",
    },
  ),

  HomeAboutUs: siteSection<HomeAboutUsProps>(
    "Home: About Us",
    HomeAboutUsSection,
    {
      badge: text,
      heading: text,
      description: textarea,
      visionHeading: text,
      visionText: textarea,
      missionHeading: text,
      missionText: textarea,
      ctaLabel: text,
      ctaUrl: text,
      videoUrl: text,
    },
    {
      badge: "About Us",
      heading: "Supreme Court of Oromia",
      description:
        "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
      visionHeading: "Our Vision",
      visionText:
        "To be a justice system where fair, swift and transparent justice is accessible to all people, focusing on protecting people and upholding full human rights, providing modern and accessible services through electronic systems, and being a strong and accurate justice system in the Oromia Region.",
      missionHeading: "Our Mission",
      missionText:
        "To provide fair, swift and transparent justice to the people, to provide modern and accessible court services through an electronic case management system, to fully protect people and uphold human rights.",
      ctaLabel: "See More Details",
      ctaUrl: "/about",
      videoUrl: "/images/MMWO-interior-design.mp4",
    },
  ),

  HomeFeatures: siteSection<HomeFeaturesProps>(
    "Home: Features",
    HomeFeaturesSection,
    {
      feature1Title: text,
      feature1Description: text,
      feature2Title: text,
      feature2Description: text,
      feature3Title: text,
      feature3Description: text,
      feature4Title: text,
      feature4Description: text,
    },
    {
      feature1Title: "Fast Processing",
      feature1Description: "Quick and efficient case handling",
      feature2Title: "Secure Platform",
      feature2Description: "Your data is safe and protected",
      feature3Title: "E-Filing",
      feature3Description: "File documents electronically",
      feature4Title: "Real-Time Updates",
      feature4Description: "Get instant case status updates",
    },
  ),

  HomeUpdates: siteSection<HomeUpdatesProps>(
    "Home: Latest Updates",
    HomeUpdatesSection,
    {
      title: text,
      viewAllLabel: text,
      readMoreLabel: text,
      update1Type: text,
      update1Date: text,
      update1Title: text,
      update1Description: textarea,
      update2Type: text,
      update2Date: text,
      update2Title: text,
      update2Description: textarea,
      update3Type: text,
      update3Date: text,
      update3Title: text,
      update3Description: textarea,
    },
    {
      title: "Latest Updates",
      viewAllLabel: "View All",
      readMoreLabel: "Read More",
      update1Type: "Announcement",
      update1Date: "May 15, 2025",
      update1Title: "New E-Filing System Launch",
      update1Description:
        "We are excited to announce the launch of our new electronic filing system for all case types.",
      update2Type: "Notice",
      update2Date: "May 10, 2025",
      update2Title: "Court Holiday Schedule",
      update2Description: "Please note the upcoming court holidays and adjusted operating hours.",
      update3Type: "Service Update",
      update3Date: "May 5, 2025",
      update3Title: "Improved Case Tracking",
      update3Description: "Our case tracking system has been enhanced for better user experience.",
    },
  ),

  HomeCoreFeatures: siteSection<HomeCoreFeaturesProps>(
    "Home: Core Features",
    HomeCoreFeaturesSection,
    {
      badge: text,
      title: text,
      description: textarea,
      learnMoreLabel: text,
      item1Title: text,
      item1Description: textarea,
      item2Title: text,
      item2Description: textarea,
      item3Title: text,
      item3Description: textarea,
    },
    {
      badge: "Why Choose Us",
      title: "Core Features",
      description: "Our platform is built on the principles of fairness, transparency, and efficiency.",
      learnMoreLabel: "Learn More",
      item1Title: "Fair Judgement",
      item1Description: "Every case is handled with impartiality and adherence to the rule of law.",
      item2Title: "Experienced Judges",
      item2Description: "Our judges bring years of expertise to ensure sound legal decisions.",
      item3Title: "Comprehensive Handling",
      item3Description: "From filing to resolution, we manage every step of the judicial process.",
    },
  ),

  HomeStats: siteSection<HomeStatsProps>(
    "Home: Stats",
    HomeStatsSection,
    {
      stat1Value: text,
      stat1Label: text,
      stat2Value: text,
      stat2Label: text,
      stat3Value: text,
      stat3Label: text,
      stat4Value: text,
      stat4Label: text,
    },
    {
      stat1Value: "98%",
      stat1Label: "Case Resolution Rate",
      stat2Value: "15k+",
      stat2Label: "Cases Handled Yearly",
      stat3Value: "50+",
      stat3Label: "Experienced Judges",
      stat4Value: "24/7",
      stat4Label: "Online Access",
    },
  ),

  HomeFaq: siteSection<HomeFaqProps>(
    "Home: FAQ",
    HomeFaqSection,
    {
      title: text,
      description: textarea,
      viewAllLabel: text,
      faq1: text,
      faq2: text,
      faq3: text,
      faq4: text,
      faq5: text,
    },
    {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about court procedures, case filing, and using our portal.",
      viewAllLabel: "View All FAQs",
      faq1: "How do I file a new case?",
      faq2: "How can I track my case status?",
      faq3: "What documents are required for filing a case?",
      faq4: "How do I request a hearing date?",
      faq5: "What payment methods are accepted for court fees?",
    },
  ),

  HomeCta: siteSection<HomeCtaProps>(
    "Home: CTA + Newsletter",
    HomeCtaSection,
    {
      heading: text,
      description: textarea,
      primaryButtonLabel: text,
      secondaryButtonLabel: text,
      newsletterHeading: text,
      newsletterDescription: textarea,
      emailPlaceholder: text,
      subscribeButtonLabel: text,
      disclaimerText: textarea,
    },
    {
      heading: "Experience the workflow the best judicial teams love",
      description:
        "Let our digital tools and resources guide you through the judicial process with ease and confidence.",
      primaryButtonLabel: "Start Your Case",
      secondaryButtonLabel: "Contact Support",
      newsletterHeading: "Subscribe to Our Newsletter",
      newsletterDescription:
        "Stay updated with the latest court decisions, legal changes, and important announcements.",
      emailPlaceholder: "Enter your email",
      subscribeButtonLabel: "Subscribe",
      disclaimerText: "By subscribing, you agree to our Privacy Policy and receive updates.",
    },
  ),

  HomeContactInfo: siteSection<HomeContactInfoProps>(
    "Home: Contact Info",
    HomeContactInfoSection,
    {
      visitTitle: text,
      visitAddress: textarea,
      visitActionLabel: text,
      callTitle: text,
      callPhone: text,
      callHours: text,
      callActionLabel: text,
      callHref: text,
      emailTitle: text,
      emailAddress: text,
      emailResponseTime: text,
      emailActionLabel: text,
      emailHref: text,
    },
    {
      visitTitle: "Visit Us",
      visitAddress: "Supreme Court of Oromia, Addis Ababa, Ethiopia",
      visitActionLabel: "Get Directions",
      callTitle: "Call Us",
      callPhone: "+251 11 123 4567",
      callHours: "Mon-Fri, 8:30 AM - 5:30 PM",
      callActionLabel: "Call Now",
      callHref: "tel:+251111234567",
      emailTitle: "Email Us",
      emailAddress: "info@supremecourt.gov.et",
      emailResponseTime: "We respond within 24 hours",
      emailActionLabel: "Send Email",
      emailHref: "mailto:info@supremecourt.gov.et",
    },
  ),

  AboutHero: siteSection<AboutHeroProps>(
    "About: Hero",
    AboutHeroSection,
    { title: text, description: textarea },
    {
      title: "About Us",
      description:
        "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
    },
  ),

  AboutQuickLinks: siteSection<AboutQuickLinksProps>(
    "About: Quick Links",
    AboutQuickLinksSection,
    {
      link1Title: text,
      link1Description: textarea,
      link1Url: text,
      link1Label: text,
      link2Title: text,
      link2Description: textarea,
      link2Url: text,
      link2Label: text,
    },
    {
      link1Title: "President's Message",
      link1Description: "Welcome message from the President of the Supreme Court of Oromia.",
      link1Url: "/about/president",
      link1Label: "Read More",
      link2Title: "Vision & Mission",
      link2Description: "Our vision and mission for justice in the Oromia Region.",
      link2Url: "/about/vision-mission",
      link2Label: "Read More",
    },
  ),

  AboutBody: siteSection<AboutBodyProps>(
    "About: Body",
    AboutBodySection,
    {
      heading: text,
      paragraph1: textarea,
      paragraph2: textarea,
      paragraph3: textarea,
      imageUrl: text,
    },
    {
      heading: "Supreme Court of Oromia",
      paragraph1:
        "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
      paragraph2:
        "We are working to provide modern and accessible court services through an electronic case management system.",
      paragraph3:
        "Above all, we are committed to delivering fair and accurate justice for all people, regardless of their status.",
      imageUrl: "/images/court-building.png",
    },
  ),

  ContactHero: siteSection<ContactHeroProps>(
    "Contact: Hero",
    ContactHeroSection,
    { title: text, description: textarea },
    {
      title: "Contact Us",
      description:
        "Get in touch with the Supreme Court of Oromia. We are here to help and provide the assistance you need.",
    },
  ),

  ContactInfoAndForm: siteSection<ContactInfoAndFormProps>(
    "Contact: Info + Form",
    ContactInfoAndFormSection,
    {
      infoHeading: text,
      infoDescription: textarea,
      addressTitle: text,
      addressLine1: text,
      addressLine2: text,
      addressLine3: text,
      phoneTitle: text,
      phone1: text,
      phone2: text,
      emailTitle: text,
      email1: text,
      email2: text,
      hoursTitle: text,
      hoursLine1: text,
      hoursLine2: text,
      formHeading: text,
      submitLabel: text,
      successMessage: textarea,
    },
    {
      infoHeading: "Contact Information",
      infoDescription:
        "Reach out to us through any of the following channels. We are committed to providing you with the best service.",
      addressTitle: "Address",
      addressLine1: "Supreme Court of Oromia",
      addressLine2: "Addis Ababa, Oromia",
      addressLine3: "Ethiopia",
      phoneTitle: "Phone",
      phone1: "+251 11 123 4567",
      phone2: "+251 11 234 5678",
      emailTitle: "Email",
      email1: "info@sco.gov.et",
      email2: "support@sco.gov.et",
      hoursTitle: "Working Hours",
      hoursLine1: "Monday - Friday: 8:30 AM - 5:30 PM",
      hoursLine2: "Saturday: 8:30 AM - 12:00 PM",
      formHeading: "Send us a Message",
      submitLabel: "Send Message",
      successMessage: "Your message has been received! We will get back to you soon.",
    },
  ),

  ContactMap: siteSection<ContactMapProps>(
    "Contact: Map",
    ContactMapSection,
    { heading: text, placeholderText: text },
    {
      heading: "Find Us in Addis Ababa",
      placeholderText: "Interactive map loading...",
    },
  ),

  ServicesHero: siteSection<ServicesHeroProps>(
    "Services: Hero",
    ServicesHeroSection,
    { title: text, description: textarea },
    {
      title: "Our Services",
      description: "Providing modern and accessible court services, ensuring fair justice is accessible to everyone.",
    },
  ),

  ServicesGrid: siteSection<ServicesGridProps>(
    "Services: Grid",
    ServicesGridSection,
    {
      service1Title: text,
      service1Description: textarea,
      service1Features: textarea,
      service2Title: text,
      service2Description: textarea,
      service2Features: textarea,
      service3Title: text,
      service3Description: textarea,
      service3Features: textarea,
      service4Title: text,
      service4Description: textarea,
      service4Features: textarea,
      service5Title: text,
      service5Description: textarea,
      service5Features: textarea,
      service6Title: text,
      service6Description: textarea,
      service6Features: textarea,
    },
    {
      service1Title: "E-Filing",
      service1Description: "File new cases online and submit to court",
      service1Features: "Online filing\nDocument submission\nReal-time tracking",
      service2Title: "Case Search",
      service2Description: "Search cases and view their status",
      service2Features: "Search by name\nSearch by number\nSearch by date",
      service3Title: "Court Fee Calculator",
      service3Description: "Calculate court fees accurately",
      service3Features: "Accurate calculation\nEasy to use\nFast results",
      service4Title: "Case Status Tracking",
      service4Description: "View case status and get updates",
      service4Features: "Live status\nEmail updates\nMobile viewing",
      service5Title: "Legal Services",
      service5Description: "Legal services and document assistance",
      service5Features: "Document help\nLegal advice\nEasy access",
      service6Title: "Secure Access",
      service6Description: "Data security and privacy protection",
      service6Features: "Data protection\nPrivacy assured\nSecure access",
    },
  ),

  ServicesAdditional: siteSection<ServicesAdditionalProps>(
    "Services: Additional",
    ServicesAdditionalSection,
    {
      heading: text,
      description: textarea,
      item1Title: text,
      item1Description: text,
      item2Title: text,
      item2Description: text,
      item3Title: text,
      item3Description: text,
      item4Title: text,
      item4Description: text,
    },
    {
      heading: "Additional Services",
      description: "More services beyond our core offerings.",
      item1Title: "Legal Resources",
      item1Description: "Legal documents and news",
      item2Title: "Court Information",
      item2Description: "Information about courts",
      item3Title: "Legal Guidelines",
      item3Description: "Guidelines and procedures",
      item4Title: "Online Support",
      item4Description: "Online help and support",
    },
  ),
};

export const siteSectionCategories: NonNullable<Config["categories"]> = {
  Home: { title: "Home", components: Object.keys(siteSectionComponents).filter((k) => k.startsWith("Home")) },
  About: { title: "About", components: Object.keys(siteSectionComponents).filter((k) => k.startsWith("About")) },
  Contact: { title: "Contact", components: Object.keys(siteSectionComponents).filter((k) => k.startsWith("Contact")) },
  Services: { title: "Services", components: Object.keys(siteSectionComponents).filter((k) => k.startsWith("Services")) },
};
