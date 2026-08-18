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
function featuresGridFromBlock(block) {
    var _a, _b, _c, _d;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        columns: (_c = block.columns) !== null && _c !== void 0 ? _c : "3",
        features: ((_d = block.features) !== null && _d !== void 0 ? _d : []).map((f) => {
            var _a, _b, _c, _d;
            return ({
                iconUrl: stripMediaUrl(f.icon),
                title: (_a = f.title) !== null && _a !== void 0 ? _a : "",
                description: (_b = f.description) !== null && _b !== void 0 ? _b : "",
                linkUrl: (_c = f.linkUrl) !== null && _c !== void 0 ? _c : "",
                linkLabel: (_d = f.linkLabel) !== null && _d !== void 0 ? _d : "",
            });
        }),
    };
}
function featuresGridToBlock(props) {
    var _a;
    return {
        __component: "shared.features-grid",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        features: ((_a = props.features) !== null && _a !== void 0 ? _a : []).map((f) => ({
            icon: stubMedia(f.iconUrl),
            title: f.title,
            description: f.description || null,
            linkUrl: f.linkUrl || null,
            linkLabel: f.linkLabel || null,
        })),
    };
}
function faqFromBlock(block) {
    var _a, _b, _c;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        items: ((_c = block.items) !== null && _c !== void 0 ? _c : []).map((item) => {
            var _a, _b;
            return ({
                question: (_a = item.question) !== null && _a !== void 0 ? _a : "",
                answer: (_b = item.answer) !== null && _b !== void 0 ? _b : "",
            });
        }),
    };
}
function faqToBlock(props) {
    var _a;
    return {
        __component: "shared.faq",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
            question: item.question,
            answer: item.answer,
        })),
    };
}
function testimonialsFromBlock(block) {
    var _a, _b, _c, _d;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        layout: (_c = block.layout) !== null && _c !== void 0 ? _c : "carousel",
        testimonials: ((_d = block.testimonials) !== null && _d !== void 0 ? _d : []).map((t) => {
            var _a, _b, _c, _d;
            return ({
                quote: (_a = t.quote) !== null && _a !== void 0 ? _a : "",
                authorName: (_b = t.authorName) !== null && _b !== void 0 ? _b : "",
                authorRole: (_c = t.authorRole) !== null && _c !== void 0 ? _c : "",
                avatarUrl: stripMediaUrl(t.avatar),
                rating: (_d = t.rating) !== null && _d !== void 0 ? _d : "5",
            });
        }),
    };
}
function testimonialsToBlock(props) {
    var _a;
    return {
        __component: "shared.testimonials",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        layout: props.layout || null,
        testimonials: ((_a = props.testimonials) !== null && _a !== void 0 ? _a : []).map((t) => ({
            quote: t.quote,
            authorName: t.authorName,
            authorRole: t.authorRole || null,
            avatar: stubMedia(t.avatarUrl),
            rating: t.rating || null,
        })),
    };
}
function reviewsFromBlock(block) {
    var _a, _b, _c, _d, _e, _f;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        layout: (_c = block.layout) !== null && _c !== void 0 ? _c : "grid",
        columns: (_d = block.columns) !== null && _d !== void 0 ? _d : "3",
        showAverageRating: (_e = block.showAverageRating) !== null && _e !== void 0 ? _e : true,
        reviews: ((_f = block.reviews) !== null && _f !== void 0 ? _f : []).map((r) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                authorName: (_a = r.authorName) !== null && _a !== void 0 ? _a : "",
                authorAvatarUrl: stripMediaUrl(r.authorAvatar),
                rating: (_b = r.rating) !== null && _b !== void 0 ? _b : "5",
                title: (_c = r.title) !== null && _c !== void 0 ? _c : "",
                body: (_d = r.body) !== null && _d !== void 0 ? _d : "",
                date: (_e = r.date) !== null && _e !== void 0 ? _e : "",
                source: (_f = r.source) !== null && _f !== void 0 ? _f : "internal",
            });
        }),
    };
}
function reviewsToBlock(props) {
    var _a;
    return {
        __component: "shared.reviews",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        layout: props.layout || null,
        columns: props.columns || null,
        showAverageRating: props.showAverageRating,
        reviews: ((_a = props.reviews) !== null && _a !== void 0 ? _a : []).map((r) => ({
            authorName: r.authorName,
            authorAvatar: stubMedia(r.authorAvatarUrl),
            rating: r.rating || "5",
            title: r.title || null,
            body: r.body,
            date: r.date || null,
            source: r.source || null,
        })),
    };
}
function statsFromBlock(block) {
    var _a, _b, _c;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        backgroundImageUrl: stripMediaUrl(block.backgroundImage),
        stats: ((_c = block.stats) !== null && _c !== void 0 ? _c : []).map((s) => {
            var _a, _b, _c;
            return ({
                value: (_a = s.value) !== null && _a !== void 0 ? _a : "",
                suffix: (_b = s.suffix) !== null && _b !== void 0 ? _b : "",
                label: (_c = s.label) !== null && _c !== void 0 ? _c : "",
                iconUrl: stripMediaUrl(s.icon),
            });
        }),
    };
}
function statsToBlock(props) {
    var _a;
    return {
        __component: "shared.stats",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        backgroundImage: stubMedia(props.backgroundImageUrl),
        stats: ((_a = props.stats) !== null && _a !== void 0 ? _a : []).map((s) => ({
            value: s.value,
            suffix: s.suffix || null,
            label: s.label,
            icon: stubMedia(s.iconUrl),
        })),
    };
}
function teamFromBlock(block) {
    var _a, _b, _c, _d;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        columns: (_c = block.columns) !== null && _c !== void 0 ? _c : "3",
        members: ((_d = block.members) !== null && _d !== void 0 ? _d : []).map((m) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                name: (_a = m.name) !== null && _a !== void 0 ? _a : "",
                role: (_b = m.role) !== null && _b !== void 0 ? _b : "",
                photoUrl: stripMediaUrl(m.photo),
                bio: (_c = m.bio) !== null && _c !== void 0 ? _c : "",
                email: (_d = m.email) !== null && _d !== void 0 ? _d : "",
                linkedinUrl: (_e = m.linkedinUrl) !== null && _e !== void 0 ? _e : "",
                twitterUrl: (_f = m.twitterUrl) !== null && _f !== void 0 ? _f : "",
            });
        }),
    };
}
function teamToBlock(props) {
    var _a;
    return {
        __component: "shared.team",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        members: ((_a = props.members) !== null && _a !== void 0 ? _a : []).map((m) => ({
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
function featuresToText(features) {
    if (Array.isArray(features)) {
        return features.map(String).join("\n");
    }
    if (typeof features === "string")
        return features;
    return "";
}
function textToFeatures(text) {
    return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}
function pricingFromBlock(block) {
    var _a, _b, _c, _d;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        columns: (_c = block.columns) !== null && _c !== void 0 ? _c : "3",
        plans: ((_d = block.plans) !== null && _d !== void 0 ? _d : []).map((p) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return ({
                planName: (_a = p.planName) !== null && _a !== void 0 ? _a : "",
                price: (_b = p.price) !== null && _b !== void 0 ? _b : "",
                period: (_c = p.period) !== null && _c !== void 0 ? _c : "",
                description: (_d = p.description) !== null && _d !== void 0 ? _d : "",
                featuresText: featuresToText(p.features),
                isFeatured: (_e = p.isFeatured) !== null && _e !== void 0 ? _e : false,
                buttonLabel: (_f = p.buttonLabel) !== null && _f !== void 0 ? _f : "",
                buttonUrl: (_g = p.buttonUrl) !== null && _g !== void 0 ? _g : "",
            });
        }),
    };
}
function pricingToBlock(props) {
    var _a;
    return {
        __component: "shared.pricing",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        plans: ((_a = props.plans) !== null && _a !== void 0 ? _a : []).map((p) => {
            var _a;
            return ({
                planName: p.planName,
                price: p.price,
                period: p.period || null,
                description: p.description || null,
                features: textToFeatures((_a = p.featuresText) !== null && _a !== void 0 ? _a : ""),
                isFeatured: p.isFeatured,
                buttonLabel: p.buttonLabel || null,
                buttonUrl: p.buttonUrl || null,
            });
        }),
    };
}
function priceListFromBlock(block) {
    var _a, _b, _c, _d;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        layout: (_c = block.layout) !== null && _c !== void 0 ? _c : "single",
        items: ((_d = block.items) !== null && _d !== void 0 ? _d : []).map((item) => {
            var _a, _b, _c, _d;
            return ({
                title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                price: (_b = item.price) !== null && _b !== void 0 ? _b : "",
                description: (_c = item.description) !== null && _c !== void 0 ? _c : "",
                imageUrl: stripMediaUrl(item.image),
                isFeatured: (_d = item.isFeatured) !== null && _d !== void 0 ? _d : false,
            });
        }),
    };
}
function priceListToBlock(props) {
    var _a;
    return {
        __component: "shared.price-list",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        layout: props.layout || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
            title: item.title,
            price: item.price,
            description: item.description || null,
            image: stubMedia(item.imageUrl),
            isFeatured: item.isFeatured,
        })),
    };
}
function flipBoxesFromBlock(block) {
    var _a, _b, _c, _d, _e;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        columns: (_c = block.columns) !== null && _c !== void 0 ? _c : "3",
        flipDirection: (_d = block.flipDirection) !== null && _d !== void 0 ? _d : "horizontal",
        boxes: ((_e = block.boxes) !== null && _e !== void 0 ? _e : []).map((b) => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                frontIconUrl: stripMediaUrl(b.frontIcon),
                frontTitle: (_a = b.frontTitle) !== null && _a !== void 0 ? _a : "",
                frontDescription: (_b = b.frontDescription) !== null && _b !== void 0 ? _b : "",
                backTitle: (_c = b.backTitle) !== null && _c !== void 0 ? _c : "",
                backDescription: (_d = b.backDescription) !== null && _d !== void 0 ? _d : "",
                buttonLabel: (_e = b.buttonLabel) !== null && _e !== void 0 ? _e : "",
                buttonUrl: (_f = b.buttonUrl) !== null && _f !== void 0 ? _f : "",
            });
        }),
    };
}
function flipBoxesToBlock(props) {
    var _a;
    return {
        __component: "shared.flip-boxes",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        flipDirection: props.flipDirection || null,
        boxes: ((_a = props.boxes) !== null && _a !== void 0 ? _a : []).map((b) => ({
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
function newsletterFromBlock(block) {
    var _a, _b, _c, _d, _e;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        placeholderText: (_c = block.placeholderText) !== null && _c !== void 0 ? _c : "",
        buttonLabel: (_d = block.buttonLabel) !== null && _d !== void 0 ? _d : "",
        backgroundImageUrl: stripMediaUrl(block.backgroundImage),
        layout: (_e = block.layout) !== null && _e !== void 0 ? _e : "boxed",
    };
}
function newsletterToBlock(props) {
    return {
        __component: "shared.newsletter",
        id: 0,
        heading: props.heading,
        subheading: props.subheading || null,
        placeholderText: props.placeholderText || null,
        buttonLabel: props.buttonLabel,
        backgroundImage: stubMedia(props.backgroundImageUrl),
        layout: props.layout || null,
    };
}
function linkInBioFromBlock(block) {
    var _a, _b, _c, _d, _e;
    return {
        profileImageUrl: stripMediaUrl(block.profileImage),
        name: (_a = block.name) !== null && _a !== void 0 ? _a : "",
        bio: (_b = block.bio) !== null && _b !== void 0 ? _b : "",
        backgroundColor: (_c = block.backgroundColor) !== null && _c !== void 0 ? _c : "light",
        buttonStyle: (_d = block.buttonStyle) !== null && _d !== void 0 ? _d : "rounded",
        links: ((_e = block.links) !== null && _e !== void 0 ? _e : []).map((l) => {
            var _a, _b, _c;
            return ({
                label: (_a = l.label) !== null && _a !== void 0 ? _a : "",
                url: (_b = l.url) !== null && _b !== void 0 ? _b : "",
                iconUrl: stripMediaUrl(l.icon),
                isFeatured: (_c = l.isFeatured) !== null && _c !== void 0 ? _c : false,
            });
        }),
    };
}
function linkInBioToBlock(props) {
    var _a;
    return {
        __component: "shared.link-in-bio",
        id: 0,
        profileImage: stubMedia(props.profileImageUrl),
        name: props.name,
        bio: props.bio || null,
        backgroundColor: props.backgroundColor ||
            null,
        buttonStyle: props.buttonStyle || null,
        links: ((_a = props.links) !== null && _a !== void 0 ? _a : []).map((l) => ({
            label: l.label,
            url: l.url,
            icon: stubMedia(l.iconUrl),
            isFeatured: l.isFeatured,
        })),
    };
}
function countdownFromBlock(block) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return {
        heading: (_a = block.heading) !== null && _a !== void 0 ? _a : "",
        subheading: (_b = block.subheading) !== null && _b !== void 0 ? _b : "",
        targetDate: (_c = block.targetDate) !== null && _c !== void 0 ? _c : "",
        showDays: (_d = block.showDays) !== null && _d !== void 0 ? _d : true,
        showHours: (_e = block.showHours) !== null && _e !== void 0 ? _e : true,
        showMinutes: (_f = block.showMinutes) !== null && _f !== void 0 ? _f : true,
        showSeconds: (_g = block.showSeconds) !== null && _g !== void 0 ? _g : true,
        expiredMessage: (_h = block.expiredMessage) !== null && _h !== void 0 ? _h : "",
    };
}
function countdownToBlock(props) {
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
export const marketingRegistry = [
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
        fromBlock: featuresGridFromBlock,
        toBlock: featuresGridToBlock,
        render: (props) => createElement(FeaturesGridBlock, { block: featuresGridToBlock(props) }),
    },
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
                    answer: "Most teams are up and running in under an hour. Connect your workspace, invite collaborators, and publish your first page the same day.",
                },
                {
                    question: "Can I change plans later?",
                    answer: "Yes. You can upgrade or downgrade anytime from billing settings. Changes take effect on your next billing cycle, and unused time is prorated.",
                },
                {
                    question: "How do I get support?",
                    answer: "Every plan includes email support. Pro and Business plans add priority response and a dedicated success channel for faster help.",
                },
            ],
        },
        fromBlock: faqFromBlock,
        toBlock: faqToBlock,
        render: (props) => createElement(FaqBlock, { block: faqToBlock(props) }),
    },
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
                    quote: "We replaced a patchwork of templates with one coherent system. Our marketing pages finally look finished on day one, and launches no longer wait on engineering.",
                    authorName: "Maya Chen",
                    authorRole: "Head of Product, Northwind",
                    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
                    rating: "5",
                },
                {
                    quote: "The block library is the closest thing we've found to a design system for content. Editors stay productive, and brand stays consistent across every page.",
                    authorName: "Jordan Blake",
                    authorRole: "VP Marketing, Contoso",
                    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
                    rating: "5",
                },
            ],
        },
        fromBlock: testimonialsFromBlock,
        toBlock: testimonialsToBlock,
        render: (props) => createElement(TestimonialsBlock, { block: testimonialsToBlock(props) }),
    },
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
                    authorAvatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
                    rating: "5",
                    title: "Polished out of the box",
                    body: "Dropped in a features grid and pricing section and they already looked production-ready. Huge time saver for our launch.",
                    date: "Mar 12, 2025",
                    source: "internal",
                },
                {
                    authorName: "Chris Ortega",
                    authorAvatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
                    rating: "5",
                    title: "Editors love it",
                    body: "Non-technical teammates publish confidently now. The defaults feel intentional instead of placeholder-y.",
                    date: "Feb 28, 2025",
                    source: "google",
                },
                {
                    authorName: "Sam Rivera",
                    authorAvatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
                    rating: "4",
                    title: "Fast path to ship",
                    body: "We went from blank canvas to a credible marketing page in an afternoon. Support was responsive when we needed custom tweaks.",
                    date: "Jan 19, 2025",
                    source: "internal",
                },
            ],
        },
        fromBlock: reviewsFromBlock,
        toBlock: reviewsToBlock,
        render: (props) => createElement(ReviewsBlock, { block: reviewsToBlock(props) }),
    },
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
        fromBlock: statsFromBlock,
        toBlock: statsToBlock,
        render: (props) => createElement(StatsBlock, { block: statsToBlock(props) }),
    },
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
                    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
                    bio: "Leads product strategy and the block library that keeps every page feeling finished.",
                    email: "",
                    linkedinUrl: "",
                    twitterUrl: "",
                },
                {
                    name: "Jordan Blake",
                    role: "Engineering Lead",
                    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
                    bio: "Builds the editor experience and publishing pipeline teams rely on daily.",
                    email: "",
                    linkedinUrl: "",
                    twitterUrl: "",
                },
                {
                    name: "Priya Nair",
                    role: "Design Director",
                    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
                    bio: "Shapes the visual system so defaults look intentional from the first drop.",
                    email: "",
                    linkedinUrl: "",
                    twitterUrl: "",
                },
            ],
        },
        fromBlock: teamFromBlock,
        toBlock: teamToBlock,
        render: (props) => createElement(TeamBlock, { block: teamToBlock(props) }),
    },
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
                    featuresText: "Core content blocks\n1 workspace\nEmail support\nPublish to one site",
                    isFeatured: false,
                    buttonLabel: "Start free",
                    buttonUrl: "/",
                },
                {
                    planName: "Pro",
                    price: "$49",
                    period: "/mo",
                    description: "For growing product teams",
                    featuresText: "Everything in Starter\nUnlimited pages\nTeam roles & permissions\nPriority support\nCustom domains",
                    isFeatured: true,
                    buttonLabel: "Choose Pro",
                    buttonUrl: "/",
                },
                {
                    planName: "Business",
                    price: "$99",
                    period: "/mo",
                    description: "For organizations at scale",
                    featuresText: "Everything in Pro\nSSO & audit logs\nDedicated success manager\nAdvanced integrations\nSLA-backed uptime",
                    isFeatured: false,
                    buttonLabel: "Contact sales",
                    buttonUrl: "/",
                },
            ],
        },
        fromBlock: pricingFromBlock,
        toBlock: pricingToBlock,
        render: (props) => createElement(PricingBlock, { block: pricingToBlock(props) }),
    },
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
                    description: "A focused session to map your content model, page goals, and rollout plan.",
                    imageUrl: "",
                    isFeatured: false,
                },
                {
                    title: "Setup",
                    price: "$499",
                    description: "We configure your workspace, templates, and publishing flow so your team can ship immediately.",
                    imageUrl: "",
                    isFeatured: true,
                },
                {
                    title: "Ongoing support",
                    price: "$99/mo",
                    description: "Monthly guidance for new pages, design tweaks, and editor training as your site grows.",
                    imageUrl: "",
                    isFeatured: false,
                },
            ],
        },
        fromBlock: priceListFromBlock,
        toBlock: priceListToBlock,
        render: (props) => createElement(PriceListBlock, { block: priceListToBlock(props) }),
    },
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
                    backDescription: "Track engagement, drop-offs, and content performance with dashboards built for product teams.",
                    buttonLabel: "View docs",
                    buttonUrl: "/",
                },
                {
                    frontIconUrl: "",
                    frontTitle: "Security",
                    frontDescription: "Protect accounts and content by default.",
                    backTitle: "Enterprise-ready controls",
                    backDescription: "Role-based access, SSO options, and audit trails keep publishing safe as your team scales.",
                    buttonLabel: "View docs",
                    buttonUrl: "/",
                },
                {
                    frontIconUrl: "",
                    frontTitle: "Automation",
                    frontDescription: "Reduce repetitive publishing work.",
                    backTitle: "Workflows that save time",
                    backDescription: "Schedule releases, sync content, and trigger reviews so launches stay on track without busywork.",
                    buttonLabel: "View docs",
                    buttonUrl: "/",
                },
            ],
        },
        fromBlock: flipBoxesFromBlock,
        toBlock: flipBoxesToBlock,
        render: (props) => createElement(FlipBoxesBlock, { block: flipBoxesToBlock(props) }),
    },
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
        fromBlock: newsletterFromBlock,
        toBlock: newsletterToBlock,
        render: (props) => createElement(NewsletterBlock, { block: newsletterToBlock(props) }),
    },
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
            profileImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
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
        fromBlock: linkInBioFromBlock,
        toBlock: linkInBioToBlock,
        render: (props) => createElement(LinkInBioBlock, { block: linkInBioToBlock(props) }),
    },
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
        fromBlock: countdownFromBlock,
        toBlock: countdownToBlock,
        render: (props) => createElement(CountdownBlock, { block: countdownToBlock(props) }),
    },
];
