import PostsBlock from "../../components/blocks/posts-block.js";
import LoopGridBlock from "../../components/blocks/loop-grid-block.js";
import LoopCarouselBlock from "../../components/blocks/loop-carousel-block.js";
import TaxonomyFilterBlock from "../../components/blocks/taxonomy-filter-block.js";
import PostListBlock from "../../components/blocks/post-list-block.js";
import PostTimelineBlock from "../../components/blocks/post-timeline-block.js";
import FeaturedPostBlock from "../../components/blocks/featured-post-block.js";
import NewsTickerBlock from "../../components/blocks/news-ticker-block.js";
import CategoryCardsBlock from "../../components/blocks/category-cards-block.js";
import RelatedPostsBlock from "../../components/blocks/related-posts-block.js";
import AuthorBoxBlock from "../../components/blocks/author-box-block.js";
import ContentTickerBlock from "../../components/blocks/content-ticker-block.js";
import { boolField, selectField } from "./helpers.js";
import { createElement } from "react";
const postsToBlock = (props) => {
    var _a, _b, _c, _d, _e;
    return ({
        __component: "shared.posts",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        layout: props.layout || null,
        columns: props.columns || null,
        categorySlug: props.categorySlug || null,
        postsLimit: props.postsLimit === "" || props.postsLimit == null
            ? null
            : Number(props.postsLimit),
        orderBy: props.orderBy || null,
        showImage: (_a = props.showImage) !== null && _a !== void 0 ? _a : null,
        showExcerpt: (_b = props.showExcerpt) !== null && _b !== void 0 ? _b : null,
        showCategory: (_c = props.showCategory) !== null && _c !== void 0 ? _c : null,
        showDate: (_d = props.showDate) !== null && _d !== void 0 ? _d : null,
        showReadMore: (_e = props.showReadMore) !== null && _e !== void 0 ? _e : null,
        readMoreLabel: props.readMoreLabel || null,
    });
};
const loopGridToBlock = (props) => {
    var _a, _b, _c;
    return ({
        __component: "shared.loop-grid",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        contentType: props.contentType || null,
        categorySlug: props.categorySlug || null,
        columns: props.columns || null,
        itemsPerPage: props.itemsPerPage === "" || props.itemsPerPage == null
            ? null
            : Number(props.itemsPerPage),
        orderBy: props.orderBy || null,
        showImage: (_a = props.showImage) !== null && _a !== void 0 ? _a : null,
        showExcerpt: (_b = props.showExcerpt) !== null && _b !== void 0 ? _b : null,
        showDate: (_c = props.showDate) !== null && _c !== void 0 ? _c : null,
    });
};
const loopCarouselToBlock = (props) => {
    var _a, _b, _c;
    return ({
        __component: "shared.loop-carousel",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        contentType: props.contentType || null,
        categorySlug: props.categorySlug || null,
        itemsToShow: props.itemsToShow === "" || props.itemsToShow == null
            ? null
            : Number(props.itemsToShow),
        itemsToScroll: props.itemsToScroll === "" || props.itemsToScroll == null
            ? null
            : Number(props.itemsToScroll),
        orderBy: props.orderBy || null,
        autoplay: (_a = props.autoplay) !== null && _a !== void 0 ? _a : null,
        autoplaySpeed: props.autoplaySpeed === "" || props.autoplaySpeed == null
            ? null
            : Number(props.autoplaySpeed),
        showArrows: (_b = props.showArrows) !== null && _b !== void 0 ? _b : null,
        showDots: (_c = props.showDots) !== null && _c !== void 0 ? _c : null,
    });
};
const taxonomyFilterToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.taxonomy-filter",
        id: 0,
        heading: props.heading || null,
        contentType: props.contentType || "posts",
        filterBy: props.filterBy || null,
        layout: props.layout || null,
        showAllOption: (_a = props.showAllOption) !== null && _a !== void 0 ? _a : null,
        allOptionLabel: props.allOptionLabel || null,
        columns: props.columns || null,
        itemsPerPage: props.itemsPerPage === "" || props.itemsPerPage == null
            ? null
            : Number(props.itemsPerPage),
    });
};
const postListToBlock = (props) => {
    var _a, _b, _c, _d;
    return ({
        __component: "shared.post-list",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        categorySlug: props.categorySlug || null,
        postsLimit: props.postsLimit === "" || props.postsLimit == null
            ? null
            : Number(props.postsLimit),
        orderBy: props.orderBy || null,
        showImage: (_a = props.showImage) !== null && _a !== void 0 ? _a : null,
        showExcerpt: (_b = props.showExcerpt) !== null && _b !== void 0 ? _b : null,
        showCategory: (_c = props.showCategory) !== null && _c !== void 0 ? _c : null,
        showDate: (_d = props.showDate) !== null && _d !== void 0 ? _d : null,
    });
};
const postTimelineToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.post-timeline",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        categorySlug: props.categorySlug || null,
        postsLimit: props.postsLimit === "" || props.postsLimit == null
            ? null
            : Number(props.postsLimit),
        orderBy: props.orderBy || null,
        showImage: (_a = props.showImage) !== null && _a !== void 0 ? _a : null,
        showExcerpt: (_b = props.showExcerpt) !== null && _b !== void 0 ? _b : null,
    });
};
const featuredPostToBlock = (props) => {
    var _a, _b, _c;
    return ({
        __component: "shared.featured-post",
        id: 0,
        heading: props.heading || null,
        categorySlug: props.categorySlug || null,
        orderBy: props.orderBy || null,
        showExcerpt: (_a = props.showExcerpt) !== null && _a !== void 0 ? _a : null,
        showCategory: (_b = props.showCategory) !== null && _b !== void 0 ? _b : null,
        showDate: (_c = props.showDate) !== null && _c !== void 0 ? _c : null,
        ctaLabel: props.ctaLabel || null,
    });
};
const newsTickerToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.news-ticker",
        id: 0,
        label: props.label || null,
        categorySlug: props.categorySlug || null,
        postsLimit: props.postsLimit === "" || props.postsLimit == null
            ? null
            : Number(props.postsLimit),
        orderBy: props.orderBy || null,
        speed: props.speed || null,
        pauseOnHover: (_a = props.pauseOnHover) !== null && _a !== void 0 ? _a : null,
    });
};
const categoryCardsToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.category-cards",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        showCount: (_a = props.showCount) !== null && _a !== void 0 ? _a : null,
        showDescription: (_b = props.showDescription) !== null && _b !== void 0 ? _b : null,
        limit: props.limit === "" || props.limit == null ? null : Number(props.limit),
    });
};
const relatedPostsToBlock = (props) => {
    var _a, _b, _c;
    return ({
        __component: "shared.related-posts",
        id: 0,
        heading: props.heading || null,
        categorySlug: props.categorySlug || null,
        postsLimit: props.postsLimit === "" || props.postsLimit == null
            ? null
            : Number(props.postsLimit),
        columns: props.columns || null,
        showImage: (_a = props.showImage) !== null && _a !== void 0 ? _a : null,
        showExcerpt: (_b = props.showExcerpt) !== null && _b !== void 0 ? _b : null,
        showDate: (_c = props.showDate) !== null && _c !== void 0 ? _c : null,
    });
};
const authorBoxToBlock = (props) => ({
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
const contentTickerToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.content-ticker",
        id: 0,
        heading: props.heading || null,
        source: props.source || null,
        categorySlug: props.categorySlug || null,
        postsLimit: props.postsLimit === "" || props.postsLimit == null
            ? null
            : Number(props.postsLimit),
        speed: props.speed || null,
        direction: props.direction || null,
        items: ((_a = props.items) !== null && _a !== void 0 ? _a : []).map((item) => ({
            text: item.text || "",
            url: item.url || null,
        })),
    });
};
export const dynamicRegistry = [
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                layout: (_c = b.layout) !== null && _c !== void 0 ? _c : "grid",
                columns: (_d = b.columns) !== null && _d !== void 0 ? _d : "3",
                categorySlug: (_e = b.categorySlug) !== null && _e !== void 0 ? _e : "",
                postsLimit: (_f = b.postsLimit) !== null && _f !== void 0 ? _f : 6,
                orderBy: (_g = b.orderBy) !== null && _g !== void 0 ? _g : "newest",
                showImage: (_h = b.showImage) !== null && _h !== void 0 ? _h : true,
                showExcerpt: (_j = b.showExcerpt) !== null && _j !== void 0 ? _j : true,
                showCategory: (_k = b.showCategory) !== null && _k !== void 0 ? _k : true,
                showDate: (_l = b.showDate) !== null && _l !== void 0 ? _l : true,
                showReadMore: (_m = b.showReadMore) !== null && _m !== void 0 ? _m : true,
                readMoreLabel: (_o = b.readMoreLabel) !== null && _o !== void 0 ? _o : "Read more",
            };
        },
        toBlock: postsToBlock,
        render: (props) => createElement(PostsBlock, { block: postsToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                contentType: (_c = b.contentType) !== null && _c !== void 0 ? _c : "posts",
                categorySlug: (_d = b.categorySlug) !== null && _d !== void 0 ? _d : "",
                columns: (_e = b.columns) !== null && _e !== void 0 ? _e : "3",
                itemsPerPage: (_f = b.itemsPerPage) !== null && _f !== void 0 ? _f : 9,
                orderBy: (_g = b.orderBy) !== null && _g !== void 0 ? _g : "newest",
                showImage: (_h = b.showImage) !== null && _h !== void 0 ? _h : true,
                showExcerpt: (_j = b.showExcerpt) !== null && _j !== void 0 ? _j : true,
                showDate: (_k = b.showDate) !== null && _k !== void 0 ? _k : true,
            };
        },
        toBlock: loopGridToBlock,
        render: (props) => createElement(LoopGridBlock, { block: loopGridToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                contentType: (_c = b.contentType) !== null && _c !== void 0 ? _c : "posts",
                categorySlug: (_d = b.categorySlug) !== null && _d !== void 0 ? _d : "",
                itemsToShow: (_e = b.itemsToShow) !== null && _e !== void 0 ? _e : 3,
                itemsToScroll: (_f = b.itemsToScroll) !== null && _f !== void 0 ? _f : 1,
                orderBy: (_g = b.orderBy) !== null && _g !== void 0 ? _g : "newest",
                autoplay: (_h = b.autoplay) !== null && _h !== void 0 ? _h : false,
                autoplaySpeed: (_j = b.autoplaySpeed) !== null && _j !== void 0 ? _j : 3000,
                showArrows: (_k = b.showArrows) !== null && _k !== void 0 ? _k : true,
                showDots: (_l = b.showDots) !== null && _l !== void 0 ? _l : true,
            };
        },
        toBlock: loopCarouselToBlock,
        render: (props) => createElement(LoopCarouselBlock, { block: loopCarouselToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                contentType: (_b = b.contentType) !== null && _b !== void 0 ? _b : "posts",
                filterBy: (_c = b.filterBy) !== null && _c !== void 0 ? _c : "category",
                layout: (_d = b.layout) !== null && _d !== void 0 ? _d : "pills",
                showAllOption: (_e = b.showAllOption) !== null && _e !== void 0 ? _e : true,
                allOptionLabel: (_f = b.allOptionLabel) !== null && _f !== void 0 ? _f : "All",
                columns: (_g = b.columns) !== null && _g !== void 0 ? _g : "3",
                itemsPerPage: (_h = b.itemsPerPage) !== null && _h !== void 0 ? _h : 9,
            };
        },
        toBlock: taxonomyFilterToBlock,
        render: (props) => createElement(TaxonomyFilterBlock, { block: taxonomyFilterToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                categorySlug: (_c = b.categorySlug) !== null && _c !== void 0 ? _c : "",
                postsLimit: (_d = b.postsLimit) !== null && _d !== void 0 ? _d : 5,
                orderBy: (_e = b.orderBy) !== null && _e !== void 0 ? _e : "newest",
                showImage: (_f = b.showImage) !== null && _f !== void 0 ? _f : true,
                showExcerpt: (_g = b.showExcerpt) !== null && _g !== void 0 ? _g : false,
                showCategory: (_h = b.showCategory) !== null && _h !== void 0 ? _h : true,
                showDate: (_j = b.showDate) !== null && _j !== void 0 ? _j : true,
            };
        },
        toBlock: postListToBlock,
        render: (props) => createElement(PostListBlock, { block: postListToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                categorySlug: (_c = b.categorySlug) !== null && _c !== void 0 ? _c : "",
                postsLimit: (_d = b.postsLimit) !== null && _d !== void 0 ? _d : 6,
                orderBy: (_e = b.orderBy) !== null && _e !== void 0 ? _e : "newest",
                showImage: (_f = b.showImage) !== null && _f !== void 0 ? _f : true,
                showExcerpt: (_g = b.showExcerpt) !== null && _g !== void 0 ? _g : true,
            };
        },
        toBlock: postTimelineToBlock,
        render: (props) => createElement(PostTimelineBlock, { block: postTimelineToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                categorySlug: (_b = b.categorySlug) !== null && _b !== void 0 ? _b : "",
                orderBy: (_c = b.orderBy) !== null && _c !== void 0 ? _c : "newest",
                showExcerpt: (_d = b.showExcerpt) !== null && _d !== void 0 ? _d : true,
                showCategory: (_e = b.showCategory) !== null && _e !== void 0 ? _e : true,
                showDate: (_f = b.showDate) !== null && _f !== void 0 ? _f : true,
                ctaLabel: (_g = b.ctaLabel) !== null && _g !== void 0 ? _g : "Read article",
            };
        },
        toBlock: featuredPostToBlock,
        render: (props) => createElement(FeaturedPostBlock, { block: featuredPostToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                label: (_a = b.label) !== null && _a !== void 0 ? _a : "Latest",
                categorySlug: (_b = b.categorySlug) !== null && _b !== void 0 ? _b : "",
                postsLimit: (_c = b.postsLimit) !== null && _c !== void 0 ? _c : 8,
                orderBy: (_d = b.orderBy) !== null && _d !== void 0 ? _d : "newest",
                speed: (_e = b.speed) !== null && _e !== void 0 ? _e : "medium",
                pauseOnHover: (_f = b.pauseOnHover) !== null && _f !== void 0 ? _f : true,
            };
        },
        toBlock: newsTickerToBlock,
        render: (props) => createElement(NewsTickerBlock, { block: newsTickerToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                columns: (_c = b.columns) !== null && _c !== void 0 ? _c : "3",
                showCount: (_d = b.showCount) !== null && _d !== void 0 ? _d : true,
                showDescription: (_e = b.showDescription) !== null && _e !== void 0 ? _e : true,
                limit: (_f = b.limit) !== null && _f !== void 0 ? _f : 6,
            };
        },
        toBlock: categoryCardsToBlock,
        render: (props) => createElement(CategoryCardsBlock, { block: categoryCardsToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "Related posts",
                categorySlug: (_b = b.categorySlug) !== null && _b !== void 0 ? _b : "",
                postsLimit: (_c = b.postsLimit) !== null && _c !== void 0 ? _c : 3,
                columns: (_d = b.columns) !== null && _d !== void 0 ? _d : "3",
                showImage: (_e = b.showImage) !== null && _e !== void 0 ? _e : true,
                showExcerpt: (_f = b.showExcerpt) !== null && _f !== void 0 ? _f : true,
                showDate: (_g = b.showDate) !== null && _g !== void 0 ? _g : true,
            };
        },
        toBlock: relatedPostsToBlock,
        render: (props) => createElement(RelatedPostsBlock, { block: relatedPostsToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const b = block;
            return {
                name: (_a = b.name) !== null && _a !== void 0 ? _a : "",
                role: (_b = b.role) !== null && _b !== void 0 ? _b : "",
                bio: (_c = b.bio) !== null && _c !== void 0 ? _c : "",
                avatarUrl: (_d = b.avatarUrl) !== null && _d !== void 0 ? _d : "",
                websiteUrl: (_e = b.websiteUrl) !== null && _e !== void 0 ? _e : "",
                twitterUrl: (_f = b.twitterUrl) !== null && _f !== void 0 ? _f : "",
                linkedinUrl: (_g = b.linkedinUrl) !== null && _g !== void 0 ? _g : "",
                align: (_h = b.align) !== null && _h !== void 0 ? _h : "left",
            };
        },
        toBlock: authorBoxToBlock,
        render: (props) => createElement(AuthorBoxBlock, { block: authorBoxToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                source: (_b = b.source) !== null && _b !== void 0 ? _b : "posts",
                categorySlug: (_c = b.categorySlug) !== null && _c !== void 0 ? _c : "",
                postsLimit: (_d = b.postsLimit) !== null && _d !== void 0 ? _d : 8,
                speed: (_e = b.speed) !== null && _e !== void 0 ? _e : "medium",
                direction: (_f = b.direction) !== null && _f !== void 0 ? _f : "left",
                items: ((_g = b.items) !== null && _g !== void 0 ? _g : []).map((item) => {
                    var _a, _b;
                    return ({
                        text: (_a = item.text) !== null && _a !== void 0 ? _a : "",
                        url: (_b = item.url) !== null && _b !== void 0 ? _b : "",
                    });
                }),
            };
        },
        toBlock: contentTickerToBlock,
        render: (props) => createElement(ContentTickerBlock, { block: contentTickerToBlock(props) }),
    },
];
