/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /contact page. The form keeps its real submit behavior (simulated send +
 * success message).
 */
export type ContactHeroProps = {
    title: string;
    description: string;
};
export declare function ContactHeroSection(props: ContactHeroProps): import("react").JSX.Element;
export type ContactInfoAndFormProps = {
    infoHeading: string;
    infoDescription: string;
    addressTitle: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    phoneTitle: string;
    phone1: string;
    phone2: string;
    emailTitle: string;
    email1: string;
    email2: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
    formHeading: string;
    submitLabel: string;
    successMessage: string;
};
export declare function ContactInfoAndFormSection(props: ContactInfoAndFormProps): import("react").JSX.Element;
export type ContactMapProps = {
    heading: string;
    placeholderText: string;
};
export declare function ContactMapSection(props: ContactMapProps): import("react").JSX.Element;
//# sourceMappingURL=contact.d.ts.map