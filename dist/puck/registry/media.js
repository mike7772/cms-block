import GalleryBlock from "@/components/blocks/gallery-block";
import VideoEmbedBlock from "@/components/blocks/video-embed-block";
import VideoPlaylistBlock from "@/components/blocks/video-playlist-block";
import LogoCloudBlock from "@/components/blocks/logo-cloud-block";
import LottieBlock from "@/components/blocks/lottie-block";
import GoogleMapsBlock from "@/components/blocks/google-maps-block";
import HotspotBlock from "@/components/blocks/hotspot-block";
import PortfolioBlock from "@/components/blocks/portfolio-block";
import { stubMedia, stubMediaList, stripMediaUrl } from "@/puck/media";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
const galleryToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.gallery",
        id: 0,
        heading: props.heading || null,
        layout: props.layout || null,
        columns: props.columns || null,
        enableLightbox: (_a = props.enableLightbox) !== null && _a !== void 0 ? _a : null,
        images: stubMediaList(props.imageUrls),
    });
};
const videoEmbedToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.video-embed",
        id: 0,
        videoUrl: (_a = props.videoUrl) !== null && _a !== void 0 ? _a : "",
        posterImage: stubMedia((_b = props.posterImageUrl) !== null && _b !== void 0 ? _b : ""),
        caption: props.caption || null,
        aspectRatio: props.aspectRatio || null,
    });
};
const videoPlaylistToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.video-playlist",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        layout: props.layout || null,
        autoplay: (_a = props.autoplay) !== null && _a !== void 0 ? _a : null,
        videos: ((_b = props.videos) !== null && _b !== void 0 ? _b : []).map((v, i) => {
            var _a, _b, _c;
            return ({
                id: i,
                title: (_a = v.title) !== null && _a !== void 0 ? _a : "",
                videoUrl: (_b = v.videoUrl) !== null && _b !== void 0 ? _b : "",
                thumbnail: stubMedia((_c = v.thumbnailUrl) !== null && _c !== void 0 ? _c : ""),
                duration: v.duration || null,
                description: v.description || null,
            });
        }),
    });
};
const logoCloudToBlock = (props) => ({
    __component: "shared.logo-cloud",
    id: 0,
    heading: props.heading || null,
    logos: stubMediaList(props.logoUrls),
});
const lottieToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.lottie",
        id: 0,
        heading: props.heading || null,
        animationFile: null,
        animationUrl: props.animationUrl || null,
        loop: (_a = props.loop) !== null && _a !== void 0 ? _a : null,
        autoplay: (_b = props.autoplay) !== null && _b !== void 0 ? _b : null,
        speed: props.speed || null,
        width: props.width || null,
        align: props.align || null,
    });
};
const googleMapsToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.google-maps",
        id: 0,
        heading: props.heading || null,
        embedUrl: (_a = props.embedUrl) !== null && _a !== void 0 ? _a : "",
        address: props.address || null,
        latitude: props.latitude || null,
        longitude: props.longitude || null,
        zoom: props.zoom === "" || props.zoom == null
            ? null
            : Number(props.zoom),
        height: props.height || null,
    });
};
const hotspotToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.hotspot",
        id: 0,
        heading: props.heading || null,
        image: stubMedia((_a = props.imageUrl) !== null && _a !== void 0 ? _a : ""),
        trigger: props.trigger || null,
        points: ((_b = props.points) !== null && _b !== void 0 ? _b : []).map((p, i) => {
            var _a;
            return ({
                id: i,
                xPosition: Number(p.xPosition) || 0,
                yPosition: Number(p.yPosition) || 0,
                title: (_a = p.title) !== null && _a !== void 0 ? _a : "",
                description: p.description || null,
                linkUrl: p.linkUrl || null,
            });
        }),
    });
};
const portfolioToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.portfolio",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        columns: props.columns || null,
        enableFilter: (_a = props.enableFilter) !== null && _a !== void 0 ? _a : null,
        items: ((_b = props.items) !== null && _b !== void 0 ? _b : []).map((item, i) => {
            var _a, _b;
            return ({
                id: i,
                title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                description: item.description || null,
                image: stubMedia((_b = item.imageUrl) !== null && _b !== void 0 ? _b : ""),
                category: item.category || null,
                tags: item.tags || null,
                linkUrl: item.linkUrl || null,
                client: item.client || null,
                date: item.date || null,
            });
        }),
    });
};
export const mediaRegistry = [
    {
        puckType: "Gallery",
        strapiComponent: "shared.gallery",
        label: "Gallery",
        category: "Media",
        fields: {
            heading: { type: "text" },
            layout: selectField(["grid", "masonry", "justified"]),
            columns: selectField(["2", "3", "4", "5"]),
            enableLightbox: boolField(),
            imageUrls: {
                type: "array",
                arrayFields: {
                    url: { type: "text" },
                },
            },
        },
        defaultProps: {
            heading: "Gallery",
            layout: "grid",
            columns: "3",
            enableLightbox: true,
            imageUrls: [],
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                layout: (_b = b.layout) !== null && _b !== void 0 ? _b : "grid",
                columns: (_c = b.columns) !== null && _c !== void 0 ? _c : "3",
                enableLightbox: (_d = b.enableLightbox) !== null && _d !== void 0 ? _d : false,
                imageUrls: ((_e = b.images) !== null && _e !== void 0 ? _e : []).map((img) => ({
                    url: stripMediaUrl(img),
                })),
            };
        },
        toBlock: galleryToBlock,
        render: (props) => createElement(GalleryBlock, { block: galleryToBlock(props) }),
    },
    {
        puckType: "VideoEmbed",
        strapiComponent: "shared.video-embed",
        label: "Video Embed",
        category: "Media",
        fields: {
            videoUrl: { type: "text" },
            posterImageUrl: { type: "text" },
            caption: { type: "text" },
            aspectRatio: selectField(["16:9", "4:3", "1:1", "21:9"]),
        },
        defaultProps: {
            videoUrl: "",
            posterImageUrl: "",
            caption: "",
            aspectRatio: "16:9",
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            const b = block;
            return {
                videoUrl: (_a = b.videoUrl) !== null && _a !== void 0 ? _a : "",
                posterImageUrl: stripMediaUrl(b.posterImage),
                caption: (_b = b.caption) !== null && _b !== void 0 ? _b : "",
                aspectRatio: (_c = b.aspectRatio) !== null && _c !== void 0 ? _c : "16:9",
            };
        },
        toBlock: videoEmbedToBlock,
        render: (props) => createElement(VideoEmbedBlock, { block: videoEmbedToBlock(props) }),
    },
    {
        puckType: "VideoPlaylist",
        strapiComponent: "shared.video-playlist",
        label: "Video Playlist",
        category: "Media",
        fields: {
            heading: { type: "text" },
            subheading: { type: "textarea" },
            layout: selectField(["sidebar", "grid", "stacked"]),
            autoplay: boolField(),
            videos: {
                type: "array",
                arrayFields: {
                    title: { type: "text" },
                    videoUrl: { type: "text" },
                    thumbnailUrl: { type: "text" },
                    duration: { type: "text" },
                    description: { type: "textarea" },
                },
            },
        },
        defaultProps: {
            heading: "Video Playlist",
            subheading: "",
            layout: "sidebar",
            autoplay: false,
            videos: [],
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                layout: (_c = b.layout) !== null && _c !== void 0 ? _c : "sidebar",
                autoplay: (_d = b.autoplay) !== null && _d !== void 0 ? _d : false,
                videos: ((_e = b.videos) !== null && _e !== void 0 ? _e : []).map((v) => {
                    var _a, _b, _c, _d;
                    return ({
                        title: (_a = v.title) !== null && _a !== void 0 ? _a : "",
                        videoUrl: (_b = v.videoUrl) !== null && _b !== void 0 ? _b : "",
                        thumbnailUrl: stripMediaUrl(v.thumbnail),
                        duration: (_c = v.duration) !== null && _c !== void 0 ? _c : "",
                        description: (_d = v.description) !== null && _d !== void 0 ? _d : "",
                    });
                }),
            };
        },
        toBlock: videoPlaylistToBlock,
        render: (props) => createElement(VideoPlaylistBlock, { block: videoPlaylistToBlock(props) }),
    },
    {
        puckType: "LogoCloud",
        strapiComponent: "shared.logo-cloud",
        label: "Logo Cloud",
        category: "Media",
        fields: {
            heading: { type: "text" },
            logoUrls: {
                type: "array",
                arrayFields: {
                    url: { type: "text" },
                },
            },
        },
        defaultProps: {
            heading: "Trusted by",
            logoUrls: [],
        },
        fromBlock: (block) => {
            var _a, _b;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                logoUrls: ((_b = b.logos) !== null && _b !== void 0 ? _b : []).map((logo) => ({
                    url: stripMediaUrl(logo),
                })),
            };
        },
        toBlock: logoCloudToBlock,
        render: (props) => createElement(LogoCloudBlock, { block: logoCloudToBlock(props) }),
    },
    {
        puckType: "Lottie",
        strapiComponent: "shared.lottie",
        label: "Lottie",
        category: "Media",
        fields: {
            heading: { type: "text" },
            animationUrl: { type: "text" },
            loop: boolField(),
            autoplay: boolField(),
            speed: selectField(["slow", "normal", "fast"]),
            width: selectField(["small", "medium", "large", "full"]),
            align: selectField(["left", "center", "right"]),
        },
        defaultProps: {
            heading: "",
            animationUrl: "",
            loop: true,
            autoplay: true,
            speed: "normal",
            width: "medium",
            align: "center",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                animationUrl: (_b = b.animationUrl) !== null && _b !== void 0 ? _b : stripMediaUrl(b.animationFile),
                loop: (_c = b.loop) !== null && _c !== void 0 ? _c : true,
                autoplay: (_d = b.autoplay) !== null && _d !== void 0 ? _d : true,
                speed: (_e = b.speed) !== null && _e !== void 0 ? _e : "normal",
                width: (_f = b.width) !== null && _f !== void 0 ? _f : "medium",
                align: (_g = b.align) !== null && _g !== void 0 ? _g : "center",
            };
        },
        toBlock: lottieToBlock,
        render: (props) => createElement(LottieBlock, { block: lottieToBlock(props) }),
    },
    {
        puckType: "GoogleMaps",
        strapiComponent: "shared.google-maps",
        label: "Google Maps",
        category: "Media",
        fields: {
            heading: { type: "text" },
            embedUrl: { type: "text" },
            address: { type: "text" },
            latitude: { type: "text" },
            longitude: { type: "text" },
            zoom: { type: "number" },
            height: selectField(["small", "medium", "large"]),
        },
        defaultProps: {
            heading: "Find us",
            embedUrl: "",
            address: "",
            latitude: "",
            longitude: "",
            zoom: 14,
            height: "medium",
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                embedUrl: (_b = b.embedUrl) !== null && _b !== void 0 ? _b : "",
                address: (_c = b.address) !== null && _c !== void 0 ? _c : "",
                latitude: (_d = b.latitude) !== null && _d !== void 0 ? _d : "",
                longitude: (_e = b.longitude) !== null && _e !== void 0 ? _e : "",
                zoom: (_f = b.zoom) !== null && _f !== void 0 ? _f : 14,
                height: (_g = b.height) !== null && _g !== void 0 ? _g : "medium",
            };
        },
        toBlock: googleMapsToBlock,
        render: (props) => createElement(GoogleMapsBlock, { block: googleMapsToBlock(props) }),
    },
    {
        puckType: "Hotspot",
        strapiComponent: "shared.hotspot",
        label: "Hotspot",
        category: "Media",
        fields: {
            heading: { type: "text" },
            imageUrl: { type: "text" },
            trigger: selectField(["hover", "click"]),
            points: {
                type: "array",
                arrayFields: {
                    xPosition: { type: "number" },
                    yPosition: { type: "number" },
                    title: { type: "text" },
                    description: { type: "textarea" },
                    linkUrl: { type: "text" },
                },
            },
        },
        defaultProps: {
            heading: "Explore",
            imageUrl: "",
            trigger: "hover",
            points: [],
        },
        fromBlock: (block) => {
            var _a, _b, _c;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                imageUrl: stripMediaUrl(b.image),
                trigger: (_b = b.trigger) !== null && _b !== void 0 ? _b : "hover",
                points: ((_c = b.points) !== null && _c !== void 0 ? _c : []).map((p) => {
                    var _a, _b, _c, _d, _e;
                    return ({
                        xPosition: (_a = p.xPosition) !== null && _a !== void 0 ? _a : 0,
                        yPosition: (_b = p.yPosition) !== null && _b !== void 0 ? _b : 0,
                        title: (_c = p.title) !== null && _c !== void 0 ? _c : "",
                        description: (_d = p.description) !== null && _d !== void 0 ? _d : "",
                        linkUrl: (_e = p.linkUrl) !== null && _e !== void 0 ? _e : "",
                    });
                }),
            };
        },
        toBlock: hotspotToBlock,
        render: (props) => createElement(HotspotBlock, { block: hotspotToBlock(props) }),
    },
    {
        puckType: "Portfolio",
        strapiComponent: "shared.portfolio",
        label: "Portfolio",
        category: "Media",
        fields: {
            heading: { type: "text" },
            subheading: { type: "textarea" },
            columns: selectField(["2", "3", "4"]),
            enableFilter: boolField(),
            items: {
                type: "array",
                arrayFields: {
                    title: { type: "text" },
                    description: { type: "textarea" },
                    imageUrl: { type: "text" },
                    category: { type: "text" },
                    tags: { type: "text" },
                    linkUrl: { type: "text" },
                    client: { type: "text" },
                    date: { type: "text" },
                },
            },
        },
        defaultProps: {
            heading: "Portfolio",
            subheading: "",
            columns: "3",
            enableFilter: true,
            items: [],
        },
        fromBlock: (block) => {
            var _a, _b, _c, _d, _e;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                columns: (_c = b.columns) !== null && _c !== void 0 ? _c : "3",
                enableFilter: (_d = b.enableFilter) !== null && _d !== void 0 ? _d : false,
                items: ((_e = b.items) !== null && _e !== void 0 ? _e : []).map((item) => {
                    var _a, _b, _c, _d, _e, _f, _g;
                    return ({
                        title: (_a = item.title) !== null && _a !== void 0 ? _a : "",
                        description: (_b = item.description) !== null && _b !== void 0 ? _b : "",
                        imageUrl: stripMediaUrl(item.image),
                        category: (_c = item.category) !== null && _c !== void 0 ? _c : "",
                        tags: (_d = item.tags) !== null && _d !== void 0 ? _d : "",
                        linkUrl: (_e = item.linkUrl) !== null && _e !== void 0 ? _e : "",
                        client: (_f = item.client) !== null && _f !== void 0 ? _f : "",
                        date: (_g = item.date) !== null && _g !== void 0 ? _g : "",
                    });
                }),
            };
        },
        toBlock: portfolioToBlock,
        render: (props) => createElement(PortfolioBlock, { block: portfolioToBlock(props) }),
    },
];
