import GalleryBlock from "@/components/blocks/gallery-block";
import VideoEmbedBlock from "@/components/blocks/video-embed-block";
import VideoPlaylistBlock from "@/components/blocks/video-playlist-block";
import LogoCloudBlock from "@/components/blocks/logo-cloud-block";
import LottieBlock from "@/components/blocks/lottie-block";
import GoogleMapsBlock from "@/components/blocks/google-maps-block";
import HotspotBlock from "@/components/blocks/hotspot-block";
import PortfolioBlock from "@/components/blocks/portfolio-block";
import { stubMedia, stubMediaList, stripMediaUrl } from "@/puck/media";
import type {
  GalleryBlock as GalleryBlockType,
  VideoEmbedBlock as VideoEmbedBlockType,
  VideoPlaylistBlock as VideoPlaylistBlockType,
  LogoCloudBlock as LogoCloudBlockType,
  LottieBlock as LottieBlockType,
  GoogleMapsBlock as GoogleMapsBlockType,
  HotspotBlock as HotspotBlockType,
  PortfolioBlock as PortfolioBlockType,
} from "@/lib/types";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";

const galleryToBlock = (props: any): GalleryBlockType => ({
  __component: "shared.gallery",
  id: 0,
  heading: props.heading || null,
  layout: props.layout || null,
  columns: props.columns || null,
  enableLightbox: props.enableLightbox ?? null,
  images: stubMediaList(props.imageUrls),
});

const videoEmbedToBlock = (props: any): VideoEmbedBlockType => ({
  __component: "shared.video-embed",
  id: 0,
  videoUrl: props.videoUrl ?? "",
  posterImage: stubMedia(props.posterImageUrl ?? ""),
  caption: props.caption || null,
  aspectRatio: props.aspectRatio || null,
});

const videoPlaylistToBlock = (props: any): VideoPlaylistBlockType => ({
  __component: "shared.video-playlist",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  layout: props.layout || null,
  autoplay: props.autoplay ?? null,
  videos: (props.videos ?? []).map((v: any, i: number) => ({
    id: i,
    title: v.title ?? "",
    videoUrl: v.videoUrl ?? "",
    thumbnail: stubMedia(v.thumbnailUrl ?? ""),
    duration: v.duration || null,
    description: v.description || null,
  })),
});

const logoCloudToBlock = (props: any): LogoCloudBlockType => ({
  __component: "shared.logo-cloud",
  id: 0,
  heading: props.heading || null,
  logos: stubMediaList(props.logoUrls),
});

const lottieToBlock = (props: any): LottieBlockType => ({
  __component: "shared.lottie",
  id: 0,
  heading: props.heading || null,
  animationFile: null,
  animationUrl: props.animationUrl || null,
  loop: props.loop ?? null,
  autoplay: props.autoplay ?? null,
  speed: props.speed || null,
  width: props.width || null,
  align: props.align || null,
});

const googleMapsToBlock = (props: any): GoogleMapsBlockType => ({
  __component: "shared.google-maps",
  id: 0,
  heading: props.heading || null,
  embedUrl: props.embedUrl ?? "",
  address: props.address || null,
  latitude: props.latitude || null,
  longitude: props.longitude || null,
  zoom:
    props.zoom === "" || props.zoom == null
      ? null
      : Number(props.zoom),
  height: props.height || null,
});

const hotspotToBlock = (props: any): HotspotBlockType => ({
  __component: "shared.hotspot",
  id: 0,
  heading: props.heading || null,
  image: stubMedia(props.imageUrl ?? ""),
  trigger: props.trigger || null,
  points: (props.points ?? []).map((p: any, i: number) => ({
    id: i,
    xPosition: Number(p.xPosition) || 0,
    yPosition: Number(p.yPosition) || 0,
    title: p.title ?? "",
    description: p.description || null,
    linkUrl: p.linkUrl || null,
  })),
});

const portfolioToBlock = (props: any): PortfolioBlockType => ({
  __component: "shared.portfolio",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  columns: props.columns || null,
  enableFilter: props.enableFilter ?? null,
  items: (props.items ?? []).map((item: any, i: number) => ({
    id: i,
    title: item.title ?? "",
    description: item.description || null,
    image: stubMedia(item.imageUrl ?? ""),
    category: item.category || null,
    tags: item.tags || null,
    linkUrl: item.linkUrl || null,
    client: item.client || null,
    date: item.date || null,
  })),
});

export const mediaRegistry: RegistryEntry[] = [
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
      const b = block as GalleryBlockType;
      return {
        heading: b.heading ?? "",
        layout: b.layout ?? "grid",
        columns: b.columns ?? "3",
        enableLightbox: b.enableLightbox ?? false,
        imageUrls: (b.images ?? []).map((img) => ({
          url: stripMediaUrl(img),
        })),
      };
    },
    toBlock: galleryToBlock,
    render: (props: any) => createElement(GalleryBlock, { block: galleryToBlock(props) }),
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
      const b = block as VideoEmbedBlockType;
      return {
        videoUrl: b.videoUrl ?? "",
        posterImageUrl: stripMediaUrl(b.posterImage),
        caption: b.caption ?? "",
        aspectRatio: b.aspectRatio ?? "16:9",
      };
    },
    toBlock: videoEmbedToBlock,
    render: (props: any) => createElement(VideoEmbedBlock, { block: videoEmbedToBlock(props) }),
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
      const b = block as VideoPlaylistBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        layout: b.layout ?? "sidebar",
        autoplay: b.autoplay ?? false,
        videos: (b.videos ?? []).map((v) => ({
          title: v.title ?? "",
          videoUrl: v.videoUrl ?? "",
          thumbnailUrl: stripMediaUrl(v.thumbnail),
          duration: v.duration ?? "",
          description: v.description ?? "",
        })),
      };
    },
    toBlock: videoPlaylistToBlock,
    render: (props: any) => createElement(VideoPlaylistBlock, { block: videoPlaylistToBlock(props) }),
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
      const b = block as LogoCloudBlockType;
      return {
        heading: b.heading ?? "",
        logoUrls: (b.logos ?? []).map((logo) => ({
          url: stripMediaUrl(logo),
        })),
      };
    },
    toBlock: logoCloudToBlock,
    render: (props: any) => createElement(LogoCloudBlock, { block: logoCloudToBlock(props) }),
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
      const b = block as LottieBlockType;
      return {
        heading: b.heading ?? "",
        animationUrl: b.animationUrl ?? stripMediaUrl(b.animationFile),
        loop: b.loop ?? true,
        autoplay: b.autoplay ?? true,
        speed: b.speed ?? "normal",
        width: b.width ?? "medium",
        align: b.align ?? "center",
      };
    },
    toBlock: lottieToBlock,
    render: (props: any) => createElement(LottieBlock, { block: lottieToBlock(props) }),
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
      const b = block as GoogleMapsBlockType;
      return {
        heading: b.heading ?? "",
        embedUrl: b.embedUrl ?? "",
        address: b.address ?? "",
        latitude: b.latitude ?? "",
        longitude: b.longitude ?? "",
        zoom: b.zoom ?? 14,
        height: b.height ?? "medium",
      };
    },
    toBlock: googleMapsToBlock,
    render: (props: any) => createElement(GoogleMapsBlock, { block: googleMapsToBlock(props) }),
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
      const b = block as HotspotBlockType;
      return {
        heading: b.heading ?? "",
        imageUrl: stripMediaUrl(b.image),
        trigger: b.trigger ?? "hover",
        points: (b.points ?? []).map((p) => ({
          xPosition: p.xPosition ?? 0,
          yPosition: p.yPosition ?? 0,
          title: p.title ?? "",
          description: p.description ?? "",
          linkUrl: p.linkUrl ?? "",
        })),
      };
    },
    toBlock: hotspotToBlock,
    render: (props: any) => createElement(HotspotBlock, { block: hotspotToBlock(props) }),
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
      const b = block as PortfolioBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        columns: b.columns ?? "3",
        enableFilter: b.enableFilter ?? false,
        items: (b.items ?? []).map((item) => ({
          title: item.title ?? "",
          description: item.description ?? "",
          imageUrl: stripMediaUrl(item.image),
          category: item.category ?? "",
          tags: item.tags ?? "",
          linkUrl: item.linkUrl ?? "",
          client: item.client ?? "",
          date: item.date ?? "",
        })),
      };
    },
    toBlock: portfolioToBlock,
    render: (props: any) => createElement(PortfolioBlock, { block: portfolioToBlock(props) }),
  },
];
