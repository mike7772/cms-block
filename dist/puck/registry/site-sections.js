import { createElement } from "react";
import Link from "next/link";
import { Calendar, Calculator, Users } from "lucide-react";
import { CaseSearchWidget } from "../../components/site-sections/case-search-widget.js";
import { CourtFeeCalculatorWidget, DEFAULT_HOW_TO_USE_STEPS, } from "../../components/site-sections/fee-calculator-widget.js";
const HOW_TO_USE_STEP_KEYS = ["howToUseStep1", "howToUseStep2", "howToUseStep3", "howToUseStep4"];
import { ImageUrlField } from "../../components/puck-fields/image-url-field.js";
import { HomeHeroSection, HomeAboutUsSection, HomeFeaturesSection, HomeUpdatesSection, HomeCoreFeaturesSection, HomeStatsSection, HomeFaqSection, HomeCtaSection, HomeContactInfoSection, } from "../../components/site-sections/home.js";
import { AboutHeroSection, AboutQuickLinksSection, AboutBodySection, } from "../../components/site-sections/about.js";
import { ContactHeroSection, ContactInfoAndFormSection, ContactMapSection, } from "../../components/site-sections/contact.js";
import { ServicesHeroSection, ServicesGridSection, ServicesAdditionalSection, } from "../../components/site-sections/services.js";
import { AboutSubpageHeroSection, AboutPresidentMessageSection, AboutVisionSection, AboutMissionSection, AboutCoreValuesSection, AboutImageBannerSection, } from "../../components/site-sections/about-subpages.js";
/**
 * "Site section" blocks reproduce the OCCMS public portal's real page
 * sections (/, /about, /contact, /services) — structural layout and icons
 * fixed, text/links/list items editable — as regular registry entries, so
 * they get Puck rendering (via puck.config.tsx's shared loop, which also
 * applies blockStyleFields + BlockStyleShell to every entry automatically)
 * AND Strapi `blocks` dynamiczone conversion (puckDataToStrapiBlocks /
 * strapiBlocksToPuckData) for free, from one definition.
 *
 * Every field here is a plain string, so fromBlock/toBlock are trivial
 * pass-through mappings — built with the small helpers below instead of
 * hand-writing 21 nearly-identical converter pairs.
 *
 * The blocks that embed a *live* app widget (case search, fee calculator —
 * HomeSearch, HomeFeeCalculator, ServicesFeeCalculator, CaseSearchWidget,
 * FeeCalculatorWidget) render the real interactive widgets directly
 * (case-search-widget.tsx / fee-calculator-widget.tsx), calling
 * OCCMS-Backend's public endpoints via NEXT_PUBLIC_API_URL — so both
 * OCCMS_FRONTED_V1 (editor) and PUBLIC_PORTAL (renderer) show the exact
 * same live widget, not an app-local placeholder.
 */
const text = { type: "text" };
const textarea = { type: "textarea" };
/** Any field literally named "imageUrl" gets the upload-capable custom field
 * (paste a link OR upload straight to MinIO) instead of a plain text input —
 * every image field in this registry uses that exact key. */
const imageUrlField = {
    type: "custom",
    render: ({ value, onChange, readOnly }) => createElement(ImageUrlField, { value: value !== null && value !== void 0 ? value : "", onChange, readOnly }),
};
function fieldsOf(keys, long = new Set()) {
    const fields = {};
    for (const k of keys) {
        fields[k] = k === "imageUrl" ? imageUrlField : long.has(k) ? textarea : text;
    }
    return fields;
}
function passthroughFromBlock(keys) {
    return (block) => {
        var _a;
        const rec = block;
        const props = {};
        for (const k of keys)
            props[k] = (_a = rec[k]) !== null && _a !== void 0 ? _a : "";
        return props;
    };
}
function passthroughToBlock(component, keys) {
    return (props) => (Object.assign({ __component: component, id: 0 }, Object.fromEntries(keys.map((k) => [k, props[k] || null]))));
}
/** Puck attaches internal metadata (a `puck: { renderDropZone, dragRef, ... }`
 * object containing functions, plus `id`/`style`/`advanced`) to every
 * block's raw props. Passing that straight into a Client Component (several
 * of these sections use useState/live widgets) breaks RSC serialization —
 * "Functions cannot be passed directly to Client Components". Picking only
 * the block's own declared fields keeps every render() call receiving a
 * plain, serializable object, same as every other registry block already
 * gets via its toBlock() conversion step. */
function pickKnown(props, keys) {
    var _a;
    const clean = {};
    for (const k of keys)
        clean[k] = (_a = props[k]) !== null && _a !== void 0 ? _a : "";
    return clean;
}
function siteEntry(puckType, strapiComponent, label, category, keys, defaultProps, render, longFields = []) {
    return {
        puckType,
        strapiComponent,
        label,
        category,
        fields: fieldsOf(keys, new Set(longFields)),
        defaultProps,
        fromBlock: passthroughFromBlock(keys),
        toBlock: passthroughToBlock(strapiComponent, keys),
        render: ((props) => render(pickKnown(props, keys))),
    };
}
/** Generic "heading + description + live widget" wrapper shared by the two
 * bare widget blocks (CaseSearchWidget / FeeCalculatorWidget). */
function WidgetSection({ heading, description, children, }) {
    return createElement("section", { className: "bg-white py-8 sm:py-12" }, createElement("div", { className: "container mx-auto px-4 sm:px-6" }, createElement("div", { className: "relative z-10 mx-auto max-w-4xl rounded-xl bg-white p-4 shadow-lg sm:p-6" }, heading
        ? createElement("h2", { className: "mb-3 text-lg font-bold text-blue-900 sm:mb-4 sm:text-xl" }, heading)
        : null, description ? createElement("p", { className: "mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base" }, description) : null, children)));
}
function HomeSearchWidgetSection(props) {
    return createElement("section", { className: "relative z-20 bg-white py-8 sm:py-12" }, createElement("div", { className: "container mx-auto px-4 sm:px-6" }, createElement("div", { className: "relative z-10 mx-auto -mt-12 max-w-4xl rounded-xl bg-white p-4 shadow-lg sm:-mt-16 sm:p-6 md:-mt-20" }, props.title
        ? createElement("h2", { className: "mb-3 text-lg font-bold text-blue-900 sm:mb-4 sm:text-xl" }, props.title)
        : null, props.description
        ? createElement("p", { className: "mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base" }, props.description)
        : null, createElement(CaseSearchWidget, {}), createElement("div", { className: "mt-3 flex flex-wrap gap-4 sm:mt-4 sm:gap-6" }, createElement(Link, { href: "/dashboard/case-status", className: "group flex items-center text-sm text-blue-600 hover:text-blue-800" }, createElement(Calendar, { className: "mr-2 h-4 w-4" }), createElement("span", null, props.searchByDateLabel)), createElement(Link, { href: "/dashboard/case-search", className: "group flex items-center text-sm text-blue-600 hover:text-blue-800" }, createElement(Users, { className: "mr-2 h-4 w-4" }), createElement("span", null, props.searchByPartyLabel))))));
}
function HomeFeeCalculatorWidgetSection(props) {
    return createElement("section", { id: "court-fee", className: "bg-white py-16" }, createElement("div", { className: "container mx-auto px-4" }, createElement("div", { className: "mb-12 text-center" }, props.badge
        ? createElement("div", { className: "mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-blue-600" }, props.badge)
        : null, props.title
        ? createElement("h2", { className: "mb-6 font-serif text-3xl font-bold text-blue-900 md:text-4xl" }, props.title)
        : null, props.description
        ? createElement("p", { className: "mx-auto max-w-2xl text-lg text-gray-700" }, props.description)
        : null), createElement("div", { className: "mx-auto max-w-full" }, createElement(CourtFeeCalculatorWidget, {
        howToUseStep1: props.howToUseStep1,
        howToUseStep2: props.howToUseStep2,
        howToUseStep3: props.howToUseStep3,
        howToUseStep4: props.howToUseStep4,
    }))));
}
function ServicesFeeCalculatorWidgetSection(props) {
    return createElement("section", { className: "bg-gray-50 py-16" }, createElement("div", { className: "container mx-auto px-4" }, createElement("div", { className: "mx-auto max-w-4xl" }, createElement("div", { className: "mb-12 text-center" }, createElement("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100" }, createElement(Calculator, { className: "h-8 w-8 text-blue-600" })), props.heading
        ? createElement("h2", { className: "mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl" }, props.heading)
        : null, props.description
        ? createElement("p", { className: "mx-auto max-w-2xl text-lg text-gray-700" }, props.description)
        : null), createElement("div", { className: "rounded-xl bg-white p-8 shadow-lg" }, createElement(CourtFeeCalculatorWidget, {
        howToUseStep1: props.howToUseStep1,
        howToUseStep2: props.howToUseStep2,
        howToUseStep3: props.howToUseStep3,
        howToUseStep4: props.howToUseStep4,
    })))));
}
export const siteSectionsRegistry = [
    siteEntry("HomeHero", "site.home-hero", "Home: Hero", "Home", ["badge", "title", "titleHighlight", "description", "fileNewCaseLabel", "trackCaseStatusLabel", "imageUrl", "buildingCaption"], {
        badge: "Serving Justice Since 1995",
        title: "Access Justice",
        titleHighlight: "Anytime, Anywhere",
        description: "Our electronic case management system provides seamless access to court services, ensuring transparency and efficiency in the judicial process.",
        fileNewCaseLabel: "File a New Case",
        trackCaseStatusLabel: "Track Case Status",
        imageUrl: "/images/court-building.png",
        buildingCaption: "Supreme Court of Oromia",
    }, (props) => createElement(HomeHeroSection, props), ["description"]),
    siteEntry("HomeSearch", "site.home-search", "Home: Case Search", "Home", ["title", "description", "searchByDateLabel", "searchByPartyLabel"], {
        title: "Quick Case Lookup",
        description: "Enter your case number to check the status of your case",
        searchByDateLabel: "Search by Hearing Date",
        searchByPartyLabel: "Search by Party Name",
    }, (props) => createElement(HomeSearchWidgetSection, props), ["description"]),
    siteEntry("HomeAboutUs", "site.home-about-us", "Home: About Us", "Home", ["badge", "heading", "description", "visionHeading", "visionText", "missionHeading", "missionText", "ctaLabel", "ctaUrl", "videoUrl"], {
        badge: "About Us",
        heading: "Supreme Court of Oromia",
        description: "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
        visionHeading: "Our Vision",
        visionText: "To be a justice system where fair, swift and transparent justice is accessible to all people, focusing on protecting people and upholding full human rights, providing modern and accessible services through electronic systems, and being a strong and accurate justice system in the Oromia Region.",
        missionHeading: "Our Mission",
        missionText: "To provide fair, swift and transparent justice to the people, to provide modern and accessible court services through an electronic case management system, to fully protect people and uphold human rights.",
        ctaLabel: "See More Details",
        ctaUrl: "/about",
        videoUrl: "/images/MMWO-interior-design.mp4",
    }, (props) => createElement(HomeAboutUsSection, props), ["description", "visionText", "missionText"]),
    siteEntry("HomeFeeCalculator", "site.home-fee-calculator", "Home: Fee Calculator", "Home", ["badge", "title", "description", ...HOW_TO_USE_STEP_KEYS], Object.assign({ badge: "Calculate Fees", title: "Court Fee Calculator", description: "Calculate the required court fee based on your case cost amount before filing your case" }, Object.fromEntries(DEFAULT_HOW_TO_USE_STEPS.map((step, i) => [HOW_TO_USE_STEP_KEYS[i], step]))), (props) => createElement(HomeFeeCalculatorWidgetSection, props), ["description"]),
    siteEntry("HomeFeatures", "site.home-features", "Home: Features", "Home", ["feature1Title", "feature1Description", "feature2Title", "feature2Description", "feature3Title", "feature3Description", "feature4Title", "feature4Description"], {
        feature1Title: "Fast Processing",
        feature1Description: "Quick and efficient case handling",
        feature2Title: "Secure Platform",
        feature2Description: "Your data is safe and protected",
        feature3Title: "E-Filing",
        feature3Description: "File documents electronically",
        feature4Title: "Real-Time Updates",
        feature4Description: "Get instant case status updates",
    }, (props) => createElement(HomeFeaturesSection, props)),
    siteEntry("HomeUpdates", "site.home-updates", "Home: Latest Updates", "Home", ["title", "viewAllLabel", "readMoreLabel", "update1Type", "update1Date", "update1Title", "update1Description", "update2Type", "update2Date", "update2Title", "update2Description", "update3Type", "update3Date", "update3Title", "update3Description"], {
        title: "Latest Updates",
        viewAllLabel: "View All",
        readMoreLabel: "Read More",
        update1Type: "Announcement",
        update1Date: "May 15, 2025",
        update1Title: "New E-Filing System Launch",
        update1Description: "We are excited to announce the launch of our new electronic filing system for all case types.",
        update2Type: "Notice",
        update2Date: "May 10, 2025",
        update2Title: "Court Holiday Schedule",
        update2Description: "Please note the upcoming court holidays and adjusted operating hours.",
        update3Type: "Service Update",
        update3Date: "May 5, 2025",
        update3Title: "Improved Case Tracking",
        update3Description: "Our case tracking system has been enhanced for better user experience.",
    }, (props) => createElement(HomeUpdatesSection, props), ["update1Description", "update2Description", "update3Description"]),
    siteEntry("HomeCoreFeatures", "site.home-core-features", "Home: Core Features", "Home", ["badge", "title", "description", "learnMoreLabel", "item1Title", "item1Description", "item2Title", "item2Description", "item3Title", "item3Description"], {
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
    }, (props) => createElement(HomeCoreFeaturesSection, props), ["description", "item1Description", "item2Description", "item3Description"]),
    siteEntry("HomeStats", "site.home-stats", "Home: Stats", "Home", ["stat1Value", "stat1Label", "stat2Value", "stat2Label", "stat3Value", "stat3Label", "stat4Value", "stat4Label"], {
        stat1Value: "98%",
        stat1Label: "Case Resolution Rate",
        stat2Value: "15k+",
        stat2Label: "Cases Handled Yearly",
        stat3Value: "50+",
        stat3Label: "Experienced Judges",
        stat4Value: "24/7",
        stat4Label: "Online Access",
    }, (props) => createElement(HomeStatsSection, props)),
    siteEntry("HomeFaq", "site.home-faq", "Home: FAQ", "Home", ["title", "description", "viewAllLabel", "faq1", "faq2", "faq3", "faq4", "faq5"], {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about court procedures, case filing, and using our portal.",
        viewAllLabel: "View All FAQs",
        faq1: "How do I file a new case?",
        faq2: "How can I track my case status?",
        faq3: "What documents are required for filing a case?",
        faq4: "How do I request a hearing date?",
        faq5: "What payment methods are accepted for court fees?",
    }, (props) => createElement(HomeFaqSection, props), ["description"]),
    siteEntry("HomeCta", "site.home-cta", "Home: CTA + Newsletter", "Home", ["heading", "description", "primaryButtonLabel", "secondaryButtonLabel", "newsletterHeading", "newsletterDescription", "emailPlaceholder", "subscribeButtonLabel", "disclaimerText"], {
        heading: "Experience the workflow the best judicial teams love",
        description: "Let our digital tools and resources guide you through the judicial process with ease and confidence.",
        primaryButtonLabel: "Start Your Case",
        secondaryButtonLabel: "Contact Support",
        newsletterHeading: "Subscribe to Our Newsletter",
        newsletterDescription: "Stay updated with the latest court decisions, legal changes, and important announcements.",
        emailPlaceholder: "Enter your email",
        subscribeButtonLabel: "Subscribe",
        disclaimerText: "By subscribing, you agree to our Privacy Policy and receive updates.",
    }, (props) => createElement(HomeCtaSection, props), ["description", "newsletterDescription", "disclaimerText"]),
    siteEntry("HomeContactInfo", "site.home-contact-info", "Home: Contact Info", "Home", ["visitTitle", "visitAddress", "visitActionLabel", "callTitle", "callPhone", "callHours", "callActionLabel", "callHref", "emailTitle", "emailAddress", "emailResponseTime", "emailActionLabel", "emailHref"], {
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
    }, (props) => createElement(HomeContactInfoSection, props), ["visitAddress"]),
    siteEntry("AboutHero", "site.about-hero", "About: Hero", "About", ["title", "description"], {
        title: "About Us",
        description: "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
    }, (props) => createElement(AboutHeroSection, props), ["description"]),
    siteEntry("AboutQuickLinks", "site.about-quick-links", "About: Quick Links", "About", ["link1Title", "link1Description", "link1Url", "link1Label", "link2Title", "link2Description", "link2Url", "link2Label"], {
        link1Title: "President's Message",
        link1Description: "Welcome message from the President of the Supreme Court of Oromia.",
        link1Url: "/about/president",
        link1Label: "Read More",
        link2Title: "Vision & Mission",
        link2Description: "Our vision and mission for justice in the Oromia Region.",
        link2Url: "/about/vision-mission",
        link2Label: "Read More",
    }, (props) => createElement(AboutQuickLinksSection, props), ["link1Description", "link2Description"]),
    siteEntry("AboutBody", "site.about-body", "About: Body", "About", ["heading", "paragraph1", "paragraph2", "paragraph3", "imageUrl"], {
        heading: "Supreme Court of Oromia",
        paragraph1: "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
        paragraph2: "We are working to provide modern and accessible court services through an electronic case management system.",
        paragraph3: "Above all, we are committed to delivering fair and accurate justice for all people, regardless of their status.",
        imageUrl: "/images/court-building.png",
    }, (props) => createElement(AboutBodySection, props), ["paragraph1", "paragraph2", "paragraph3"]),
    siteEntry("ContactHero", "site.contact-hero", "Contact: Hero", "Contact", ["title", "description"], {
        title: "Contact Us",
        description: "Get in touch with the Supreme Court of Oromia. We are here to help and provide the assistance you need.",
    }, (props) => createElement(ContactHeroSection, props), ["description"]),
    siteEntry("ContactInfoAndForm", "site.contact-info-and-form", "Contact: Info + Form", "Contact", ["infoHeading", "infoDescription", "addressTitle", "addressLine1", "addressLine2", "addressLine3", "phoneTitle", "phone1", "phone2", "emailTitle", "email1", "email2", "hoursTitle", "hoursLine1", "hoursLine2", "formHeading", "submitLabel", "successMessage"], {
        infoHeading: "Contact Information",
        infoDescription: "Reach out to us through any of the following channels. We are committed to providing you with the best service.",
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
    }, (props) => createElement(ContactInfoAndFormSection, props), ["infoDescription", "successMessage"]),
    siteEntry("ContactMap", "site.contact-map", "Contact: Map", "Contact", ["heading", "placeholderText"], {
        heading: "Find Us in Addis Ababa",
        placeholderText: "Interactive map loading...",
    }, (props) => createElement(ContactMapSection, props)),
    siteEntry("ServicesHero", "site.services-hero", "Services: Hero", "Services", ["title", "description"], {
        title: "Our Services",
        description: "Providing modern and accessible court services, ensuring fair justice is accessible to everyone.",
    }, (props) => createElement(ServicesHeroSection, props), ["description"]),
    siteEntry("ServicesGrid", "site.services-grid", "Services: Grid", "Services", ["service1Title", "service1Description", "service1Features", "service2Title", "service2Description", "service2Features", "service3Title", "service3Description", "service3Features", "service4Title", "service4Description", "service4Features", "service5Title", "service5Description", "service5Features", "service6Title", "service6Description", "service6Features"], {
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
    }, (props) => createElement(ServicesGridSection, props), ["service1Description", "service1Features", "service2Description", "service2Features", "service3Description", "service3Features", "service4Description", "service4Features", "service5Description", "service5Features", "service6Description", "service6Features"]),
    siteEntry("ServicesFeeCalculator", "site.services-fee-calculator", "Services: Fee Calculator", "Services", ["heading", "description", ...HOW_TO_USE_STEP_KEYS], Object.assign({ heading: "Calculate Court Fees", description: "Use our calculator to accurately and quickly determine court fees." }, Object.fromEntries(DEFAULT_HOW_TO_USE_STEPS.map((step, i) => [HOW_TO_USE_STEP_KEYS[i], step]))), (props) => createElement(ServicesFeeCalculatorWidgetSection, props), ["description"]),
    siteEntry("ServicesAdditional", "site.services-additional", "Services: Additional", "Services", ["heading", "description", "item1Title", "item1Description", "item2Title", "item2Description", "item3Title", "item3Description", "item4Title", "item4Description"], {
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
    }, (props) => createElement(ServicesAdditionalSection, props), ["description"]),
    siteEntry("AboutSubpageHero", "site.about-subpage-hero", "About: Subpage Hero", "About", ["backLabel", "backUrl", "title", "subtitle"], {
        backLabel: "Back to About Us",
        backUrl: "/home/about",
        title: "Page Title",
        subtitle: "Page subtitle.",
    }, (props) => createElement(AboutSubpageHeroSection, props), ["subtitle"]),
    siteEntry("AboutPresidentMessage", "site.about-president-message", "About: President's Message", "About", [
        "imageUrl", "imageCaptionTitle", "imageCaptionSubtitle", "quoteText", "bodyHeading",
        "bodyParagraph1", "bodyParagraph2", "bodyParagraph3", "bodyParagraph4",
        "commitmentHeading", "commitment1", "commitment2", "commitment3", "commitment4",
    ], {
        imageUrl: "/images/President.jpg",
        imageCaptionTitle: "Court President",
        imageCaptionSubtitle: "Supreme Court of Oromia",
        quoteText: "\"Above all, we are committed to delivering fair and accurate justice for all people. Justice must be right and protect human rights, or there can be no justice. Justice must be fair and swift.\"",
        bodyHeading: "At the Supreme Court of Oromia",
        bodyParagraph1: "The Supreme Court of Oromia is the highest court operating in the Oromia Region. Our mission is to provide fair, swift, and transparent justice to the people.",
        bodyParagraph2: "We are working to provide modern and accessible court services through an electronic case management system. This makes it easier and more convenient for everyone to access justice.",
        bodyParagraph3: "Above all, we are committed to delivering fair and accurate justice for all people, regardless of their status. Everyone has the right to access justice, whether they are within the country or abroad.",
        bodyParagraph4: "Justice must not only be fair, accurate, swift and transparent, but also must be able to protect human rights and respect human dignity. Therefore, all our work focuses on protecting people and upholding full human rights.",
        commitmentHeading: "Our Commitment",
        commitment1: "Delivering fair and accurate justice",
        commitment2: "Providing swift and accessible services",
        commitment3: "Working with electronic systems",
        commitment4: "Protecting human dignity and justice",
    }, (props) => createElement(AboutPresidentMessageSection, props), ["quoteText", "bodyParagraph1", "bodyParagraph2", "bodyParagraph3", "bodyParagraph4"]),
    siteEntry("AboutVision", "site.about-vision-section", "About: Vision", "About", ["heading", "text"], {
        heading: "Our Vision",
        text: "To be a justice system where fair, swift and transparent justice is accessible to all people, focusing on protecting people and upholding full human rights, providing modern and accessible services through electronic systems, and being a strong and accurate justice system in the Oromia Region.",
    }, (props) => createElement(AboutVisionSection, props), ["text"]),
    siteEntry("AboutMission", "site.about-mission-section", "About: Mission", "About", ["heading", "text", "pillar1Title", "pillar1Description", "pillar2Title", "pillar2Description", "pillar3Title", "pillar3Description"], {
        heading: "Our Mission",
        text: "To provide fair, swift and transparent justice to the people, to provide modern and accessible court services through an electronic case management system, to fully protect people and uphold human rights.",
        pillar1Title: "Fair Justice",
        pillar1Description: "Fair and accurate justice",
        pillar2Title: "Swift Service",
        pillar2Description: "Swift and accessible service",
        pillar3Title: "People First",
        pillar3Description: "Serving all people",
    }, (props) => createElement(AboutMissionSection, props), ["text"]),
    siteEntry("AboutCoreValues", "site.about-core-values-section", "About: Core Values", "About", ["heading", "description", "value1Title", "value1Description", "value2Title", "value2Description", "value3Title", "value3Description", "value4Title", "value4Description"], {
        heading: "Our Core Values",
        description: "The core values that guide our work",
        value1Title: "Integrity",
        value1Description: "All our work is accurate and truthful",
        value2Title: "People-Centered",
        value2Description: "Serving and respecting all people",
        value3Title: "Transparency",
        value3Description: "All our work is transparent and open",
        value4Title: "Efficiency",
        value4Description: "Swift service and complete work",
    }, (props) => createElement(AboutCoreValuesSection, props), ["description"]),
    siteEntry("AboutImageBanner", "site.about-image-banner", "About: Image Banner", "About", ["imageUrl", "captionTitle", "captionText"], {
        imageUrl: "/images/about image.jpg",
        captionTitle: "Justice for All",
        captionText: "Fair justice accessible to everyone",
    }, (props) => createElement(AboutImageBannerSection, props)),
    siteEntry("CaseSearchWidget", "site.case-search-widget", "Case Search Widget", "Home", ["heading", "description"], {
        heading: "Quick Case Lookup",
        description: "Access your case information instantly",
    }, (props) => createElement(WidgetSection, props, createElement(CaseSearchWidget, {})), ["description"]),
    siteEntry("FeeCalculatorWidget", "site.fee-calculator-widget", "Court Fee Calculator", "Home", ["heading", "description", ...HOW_TO_USE_STEP_KEYS], Object.assign({ heading: "Court Fee Calculator", description: "Calculate the required court fee based on your case cost amount before filing your case" }, Object.fromEntries(DEFAULT_HOW_TO_USE_STEPS.map((step, i) => [HOW_TO_USE_STEP_KEYS[i], step]))), (props) => createElement(WidgetSection, props, createElement(CourtFeeCalculatorWidget, props)), ["description"]),
];
