import ContactFormBlock from "@/components/blocks/contact-form-block";
import LoginFormBlock from "@/components/blocks/login-form-block";
import SearchBarBlock from "@/components/blocks/search-bar-block";
import OffCanvasBlock from "@/components/blocks/off-canvas-block";
import ProgressBarsBlock from "@/components/blocks/progress-bars-block";
import ProgressTrackerBlock from "@/components/blocks/progress-tracker-block";
import { stubMedia, stripMediaUrl } from "@/puck/media";
import type {
  ContactFormBlock as ContactFormBlockType,
  LoginFormBlock as LoginFormBlockType,
  SearchBarBlock as SearchBarBlockType,
  OffCanvasBlock as OffCanvasBlockType,
  ProgressBarsBlock as ProgressBarsBlockType,
  ProgressTrackerBlock as ProgressTrackerBlockType,
} from "@/lib/types";
import { boolField, selectField } from "./helpers";
import { createElement } from "react";
import type { RegistryEntry } from "./types";

const contactFormToBlock = (props: any): ContactFormBlockType => ({
  __component: "shared.contact-form",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  recipientEmail: props.recipientEmail || null,
  showNameField: props.showNameField ?? null,
  showPhoneField: props.showPhoneField ?? null,
  showSubjectField: props.showSubjectField ?? null,
  showOrganizationField: props.showOrganizationField ?? null,
  submitButtonLabel: props.submitButtonLabel || null,
  successMessage: props.successMessage || null,
});

const loginFormToBlock = (props: any): LoginFormBlockType => ({
  __component: "shared.login-form",
  id: 0,
  heading: props.heading || null,
  subheading: props.subheading || null,
  mode: props.mode || null,
  showRememberMe: props.showRememberMe ?? null,
  showForgotPassword: props.showForgotPassword ?? null,
  loginButtonLabel: props.loginButtonLabel || null,
  registerButtonLabel: props.registerButtonLabel || null,
  redirectUrl: props.redirectUrl || null,
});

const searchBarToBlock = (props: any): SearchBarBlockType => ({
  __component: "shared.search-bar",
  id: 0,
  placeholder: props.placeholder || null,
  searchType: props.searchType || null,
  style: props.style || null,
  buttonLabel: props.buttonLabel || null,
  showButton: props.showButton ?? null,
  align: props.align || null,
  width: props.width || null,
});

const offCanvasToBlock = (props: any): OffCanvasBlockType => ({
  __component: "shared.off-canvas",
  id: 0,
  triggerLabel: props.triggerLabel ?? "",
  triggerIcon: stubMedia(props.triggerIconUrl ?? ""),
  position: props.position || null,
  title: props.title || null,
  content: props.content || null,
  width: props.width || null,
  closeOnOverlayClick: props.closeOnOverlayClick ?? null,
});

const progressBarsToBlock = (props: any): ProgressBarsBlockType => ({
  __component: "shared.progress-bars",
  id: 0,
  heading: props.heading || null,
  bars: (props.bars ?? []).map((bar: any, i: number) => ({
    id: i,
    label: bar.label ?? "",
    percentage: Number(bar.percentage) || 0,
    color: bar.color || null,
  })),
});

const progressTrackerToBlock = (props: any): ProgressTrackerBlockType => ({
  __component: "shared.progress-tracker",
  id: 0,
  heading: props.heading || null,
  layout: props.layout || null,
  currentStep:
    props.currentStep === "" || props.currentStep == null
      ? null
      : Number(props.currentStep),
  steps: (props.steps ?? []).map((step: any, i: number) => ({
    id: i,
    title: step.title ?? "",
    description: step.description || null,
    icon: stubMedia(step.iconUrl ?? ""),
    isComplete: step.isComplete ?? null,
  })),
});

export const formsRegistry: RegistryEntry[] = [
  {
    puckType: "ContactForm",
    strapiComponent: "shared.contact-form",
    label: "Contact Form",
    category: "Forms",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      recipientEmail: { type: "text" },
      showNameField: boolField(),
      showPhoneField: boolField(),
      showSubjectField: boolField(),
      showOrganizationField: boolField(),
      submitButtonLabel: { type: "text" },
      successMessage: { type: "textarea" },
    },
    defaultProps: {
      heading: "Contact us",
      subheading: "",
      recipientEmail: "",
      showNameField: true,
      showPhoneField: false,
      showSubjectField: true,
      showOrganizationField: false,
      submitButtonLabel: "Send message",
      successMessage: "Thanks — we'll be in touch soon.",
    },
    fromBlock: (block) => {
      const b = block as ContactFormBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        recipientEmail: b.recipientEmail ?? "",
        showNameField: b.showNameField ?? true,
        showPhoneField: b.showPhoneField ?? false,
        showSubjectField: b.showSubjectField ?? true,
        showOrganizationField: b.showOrganizationField ?? false,
        submitButtonLabel: b.submitButtonLabel ?? "Send message",
        successMessage: b.successMessage ?? "",
      };
    },
    toBlock: contactFormToBlock,
    render: (props: any) => createElement(ContactFormBlock, { block: contactFormToBlock(props) }),
  },
  {
    puckType: "LoginForm",
    strapiComponent: "shared.login-form",
    label: "Login Form",
    category: "Forms",
    fields: {
      heading: { type: "text" },
      subheading: { type: "textarea" },
      mode: selectField(["login", "register", "both"]),
      showRememberMe: boolField(),
      showForgotPassword: boolField(),
      loginButtonLabel: { type: "text" },
      registerButtonLabel: { type: "text" },
      redirectUrl: { type: "text" },
    },
    defaultProps: {
      heading: "Welcome back",
      subheading: "",
      mode: "login",
      showRememberMe: true,
      showForgotPassword: true,
      loginButtonLabel: "Log in",
      registerButtonLabel: "Create account",
      redirectUrl: "/",
    },
    fromBlock: (block) => {
      const b = block as LoginFormBlockType;
      return {
        heading: b.heading ?? "",
        subheading: b.subheading ?? "",
        mode: b.mode ?? "login",
        showRememberMe: b.showRememberMe ?? true,
        showForgotPassword: b.showForgotPassword ?? true,
        loginButtonLabel: b.loginButtonLabel ?? "Log in",
        registerButtonLabel: b.registerButtonLabel ?? "Create account",
        redirectUrl: b.redirectUrl ?? "/",
      };
    },
    toBlock: loginFormToBlock,
    render: (props: any) => createElement(LoginFormBlock, { block: loginFormToBlock(props) }),
  },
  {
    puckType: "SearchBar",
    strapiComponent: "shared.search-bar",
    label: "Search Bar",
    category: "Forms",
    fields: {
      placeholder: { type: "text" },
      searchType: selectField(["all", "posts", "pages"]),
      style: selectField(["inline", "boxed", "minimal", "expanded"]),
      buttonLabel: { type: "text" },
      showButton: boolField(),
      align: selectField(["left", "center", "right"]),
      width: selectField(["small", "medium", "large", "full"]),
    },
    defaultProps: {
      placeholder: "Search…",
      searchType: "all",
      style: "boxed",
      buttonLabel: "Search",
      showButton: true,
      align: "center",
      width: "medium",
    },
    fromBlock: (block) => {
      const b = block as SearchBarBlockType;
      return {
        placeholder: b.placeholder ?? "Search…",
        searchType: b.searchType ?? "all",
        style: b.style ?? "boxed",
        buttonLabel: b.buttonLabel ?? "Search",
        showButton: b.showButton ?? true,
        align: b.align ?? "center",
        width: b.width ?? "medium",
      };
    },
    toBlock: searchBarToBlock,
    render: (props: any) => createElement(SearchBarBlock, { block: searchBarToBlock(props) }),
  },
  {
    puckType: "OffCanvas",
    strapiComponent: "shared.off-canvas",
    label: "Off Canvas",
    category: "Forms",
    fields: {
      triggerLabel: { type: "text" },
      triggerIconUrl: { type: "text" },
      position: selectField(["left", "right", "top", "bottom"]),
      title: { type: "text" },
      content: { type: "textarea" },
      width: selectField(["small", "medium", "large", "full"]),
      closeOnOverlayClick: boolField(),
    },
    defaultProps: {
      triggerLabel: "Open panel",
      triggerIconUrl: "",
      position: "right",
      title: "Panel",
      content: "",
      width: "medium",
      closeOnOverlayClick: true,
    },
    fromBlock: (block) => {
      const b = block as OffCanvasBlockType;
      return {
        triggerLabel: b.triggerLabel ?? "Open panel",
        triggerIconUrl: stripMediaUrl(b.triggerIcon),
        position: b.position ?? "right",
        title: b.title ?? "",
        content: b.content ?? "",
        width: b.width ?? "medium",
        closeOnOverlayClick: b.closeOnOverlayClick ?? true,
      };
    },
    toBlock: offCanvasToBlock,
    render: (props: any) => createElement(OffCanvasBlock, { block: offCanvasToBlock(props) }),
  },
  {
    puckType: "ProgressBars",
    strapiComponent: "shared.progress-bars",
    label: "Progress Bars",
    category: "Forms",
    fields: {
      heading: { type: "text" },
      bars: {
        type: "array",
        arrayFields: {
          label: { type: "text" },
          percentage: { type: "number" },
          color: selectField([
            "primary",
            "success",
            "warning",
            "danger",
            "info",
          ]),
        },
      },
    },
    defaultProps: {
      heading: "Skills",
      bars: [
        { label: "Design", percentage: 80, color: "primary" },
        { label: "Development", percentage: 65, color: "info" },
      ],
    },
    fromBlock: (block) => {
      const b = block as ProgressBarsBlockType;
      return {
        heading: b.heading ?? "",
        bars: (b.bars ?? []).map((bar) => ({
          label: bar.label ?? "",
          percentage: bar.percentage ?? 0,
          color: bar.color ?? "primary",
        })),
      };
    },
    toBlock: progressBarsToBlock,
    render: (props: any) => createElement(ProgressBarsBlock, { block: progressBarsToBlock(props) }),
  },
  {
    puckType: "ProgressTracker",
    strapiComponent: "shared.progress-tracker",
    label: "Progress Tracker",
    category: "Forms",
    fields: {
      heading: { type: "text" },
      layout: selectField(["horizontal", "vertical"]),
      currentStep: { type: "number" },
      steps: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          description: { type: "textarea" },
          iconUrl: { type: "text" },
          isComplete: boolField(),
        },
      },
    },
    defaultProps: {
      heading: "Your progress",
      layout: "horizontal",
      currentStep: 1,
      steps: [],
    },
    fromBlock: (block) => {
      const b = block as ProgressTrackerBlockType;
      return {
        heading: b.heading ?? "",
        layout: b.layout ?? "horizontal",
        currentStep: b.currentStep ?? 1,
        steps: (b.steps ?? []).map((step) => ({
          title: step.title ?? "",
          description: step.description ?? "",
          iconUrl: stripMediaUrl(step.icon),
          isComplete: step.isComplete ?? false,
        })),
      };
    },
    toBlock: progressTrackerToBlock,
    render: (props: any) => createElement(ProgressTrackerBlock, { block: progressTrackerToBlock(props) }),
  },
];
