import ContactFormBlock from "../../components/blocks/contact-form-block.js";
import LoginFormBlock from "../../components/blocks/login-form-block.js";
import SearchBarBlock from "../../components/blocks/search-bar-block.js";
import OffCanvasBlock from "../../components/blocks/off-canvas-block.js";
import ProgressBarsBlock from "../../components/blocks/progress-bars-block.js";
import ProgressTrackerBlock from "../../components/blocks/progress-tracker-block.js";
import { stubMedia, stripMediaUrl } from "../../puck/media.js";
import { boolField, selectField } from "./helpers.js";
import { createElement } from "react";
const contactFormToBlock = (props) => {
    var _a, _b, _c, _d;
    return ({
        __component: "shared.contact-form",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        recipientEmail: props.recipientEmail || null,
        showNameField: (_a = props.showNameField) !== null && _a !== void 0 ? _a : null,
        showPhoneField: (_b = props.showPhoneField) !== null && _b !== void 0 ? _b : null,
        showSubjectField: (_c = props.showSubjectField) !== null && _c !== void 0 ? _c : null,
        showOrganizationField: (_d = props.showOrganizationField) !== null && _d !== void 0 ? _d : null,
        submitButtonLabel: props.submitButtonLabel || null,
        successMessage: props.successMessage || null,
    });
};
const loginFormToBlock = (props) => {
    var _a, _b;
    return ({
        __component: "shared.login-form",
        id: 0,
        heading: props.heading || null,
        subheading: props.subheading || null,
        mode: props.mode || null,
        showRememberMe: (_a = props.showRememberMe) !== null && _a !== void 0 ? _a : null,
        showForgotPassword: (_b = props.showForgotPassword) !== null && _b !== void 0 ? _b : null,
        loginButtonLabel: props.loginButtonLabel || null,
        registerButtonLabel: props.registerButtonLabel || null,
        redirectUrl: props.redirectUrl || null,
    });
};
const searchBarToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.search-bar",
        id: 0,
        placeholder: props.placeholder || null,
        searchType: props.searchType || null,
        style: props.style || null,
        buttonLabel: props.buttonLabel || null,
        showButton: (_a = props.showButton) !== null && _a !== void 0 ? _a : null,
        align: props.align || null,
        width: props.width || null,
    });
};
const offCanvasToBlock = (props) => {
    var _a, _b, _c;
    return ({
        __component: "shared.off-canvas",
        id: 0,
        triggerLabel: (_a = props.triggerLabel) !== null && _a !== void 0 ? _a : "",
        triggerIcon: stubMedia((_b = props.triggerIconUrl) !== null && _b !== void 0 ? _b : ""),
        position: props.position || null,
        title: props.title || null,
        content: props.content || null,
        width: props.width || null,
        closeOnOverlayClick: (_c = props.closeOnOverlayClick) !== null && _c !== void 0 ? _c : null,
    });
};
const progressBarsToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.progress-bars",
        id: 0,
        heading: props.heading || null,
        bars: ((_a = props.bars) !== null && _a !== void 0 ? _a : []).map((bar, i) => {
            var _a;
            return ({
                id: i,
                label: (_a = bar.label) !== null && _a !== void 0 ? _a : "",
                percentage: Number(bar.percentage) || 0,
                color: bar.color || null,
            });
        }),
    });
};
const progressTrackerToBlock = (props) => {
    var _a;
    return ({
        __component: "shared.progress-tracker",
        id: 0,
        heading: props.heading || null,
        layout: props.layout || null,
        currentStep: props.currentStep === "" || props.currentStep == null
            ? null
            : Number(props.currentStep),
        steps: ((_a = props.steps) !== null && _a !== void 0 ? _a : []).map((step, i) => {
            var _a, _b, _c;
            return ({
                id: i,
                title: (_a = step.title) !== null && _a !== void 0 ? _a : "",
                description: step.description || null,
                icon: stubMedia((_b = step.iconUrl) !== null && _b !== void 0 ? _b : ""),
                isComplete: (_c = step.isComplete) !== null && _c !== void 0 ? _c : null,
            });
        }),
    });
};
export const formsRegistry = [
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                recipientEmail: (_c = b.recipientEmail) !== null && _c !== void 0 ? _c : "",
                showNameField: (_d = b.showNameField) !== null && _d !== void 0 ? _d : true,
                showPhoneField: (_e = b.showPhoneField) !== null && _e !== void 0 ? _e : false,
                showSubjectField: (_f = b.showSubjectField) !== null && _f !== void 0 ? _f : true,
                showOrganizationField: (_g = b.showOrganizationField) !== null && _g !== void 0 ? _g : false,
                submitButtonLabel: (_h = b.submitButtonLabel) !== null && _h !== void 0 ? _h : "Send message",
                successMessage: (_j = b.successMessage) !== null && _j !== void 0 ? _j : "",
            };
        },
        toBlock: contactFormToBlock,
        render: (props) => createElement(ContactFormBlock, { block: contactFormToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                subheading: (_b = b.subheading) !== null && _b !== void 0 ? _b : "",
                mode: (_c = b.mode) !== null && _c !== void 0 ? _c : "login",
                showRememberMe: (_d = b.showRememberMe) !== null && _d !== void 0 ? _d : true,
                showForgotPassword: (_e = b.showForgotPassword) !== null && _e !== void 0 ? _e : true,
                loginButtonLabel: (_f = b.loginButtonLabel) !== null && _f !== void 0 ? _f : "Log in",
                registerButtonLabel: (_g = b.registerButtonLabel) !== null && _g !== void 0 ? _g : "Create account",
                redirectUrl: (_h = b.redirectUrl) !== null && _h !== void 0 ? _h : "/",
            };
        },
        toBlock: loginFormToBlock,
        render: (props) => createElement(LoginFormBlock, { block: loginFormToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f, _g;
            const b = block;
            return {
                placeholder: (_a = b.placeholder) !== null && _a !== void 0 ? _a : "Search…",
                searchType: (_b = b.searchType) !== null && _b !== void 0 ? _b : "all",
                style: (_c = b.style) !== null && _c !== void 0 ? _c : "boxed",
                buttonLabel: (_d = b.buttonLabel) !== null && _d !== void 0 ? _d : "Search",
                showButton: (_e = b.showButton) !== null && _e !== void 0 ? _e : true,
                align: (_f = b.align) !== null && _f !== void 0 ? _f : "center",
                width: (_g = b.width) !== null && _g !== void 0 ? _g : "medium",
            };
        },
        toBlock: searchBarToBlock,
        render: (props) => createElement(SearchBarBlock, { block: searchBarToBlock(props) }),
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
            var _a, _b, _c, _d, _e, _f;
            const b = block;
            return {
                triggerLabel: (_a = b.triggerLabel) !== null && _a !== void 0 ? _a : "Open panel",
                triggerIconUrl: stripMediaUrl(b.triggerIcon),
                position: (_b = b.position) !== null && _b !== void 0 ? _b : "right",
                title: (_c = b.title) !== null && _c !== void 0 ? _c : "",
                content: (_d = b.content) !== null && _d !== void 0 ? _d : "",
                width: (_e = b.width) !== null && _e !== void 0 ? _e : "medium",
                closeOnOverlayClick: (_f = b.closeOnOverlayClick) !== null && _f !== void 0 ? _f : true,
            };
        },
        toBlock: offCanvasToBlock,
        render: (props) => createElement(OffCanvasBlock, { block: offCanvasToBlock(props) }),
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
            var _a, _b;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                bars: ((_b = b.bars) !== null && _b !== void 0 ? _b : []).map((bar) => {
                    var _a, _b, _c;
                    return ({
                        label: (_a = bar.label) !== null && _a !== void 0 ? _a : "",
                        percentage: (_b = bar.percentage) !== null && _b !== void 0 ? _b : 0,
                        color: (_c = bar.color) !== null && _c !== void 0 ? _c : "primary",
                    });
                }),
            };
        },
        toBlock: progressBarsToBlock,
        render: (props) => createElement(ProgressBarsBlock, { block: progressBarsToBlock(props) }),
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
            var _a, _b, _c, _d;
            const b = block;
            return {
                heading: (_a = b.heading) !== null && _a !== void 0 ? _a : "",
                layout: (_b = b.layout) !== null && _b !== void 0 ? _b : "horizontal",
                currentStep: (_c = b.currentStep) !== null && _c !== void 0 ? _c : 1,
                steps: ((_d = b.steps) !== null && _d !== void 0 ? _d : []).map((step) => {
                    var _a, _b, _c;
                    return ({
                        title: (_a = step.title) !== null && _a !== void 0 ? _a : "",
                        description: (_b = step.description) !== null && _b !== void 0 ? _b : "",
                        iconUrl: stripMediaUrl(step.icon),
                        isComplete: (_c = step.isComplete) !== null && _c !== void 0 ? _c : false,
                    });
                }),
            };
        },
        toBlock: progressTrackerToBlock,
        render: (props) => createElement(ProgressTrackerBlock, { block: progressTrackerToBlock(props) }),
    },
];
