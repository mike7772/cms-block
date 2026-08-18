export const locales = [
    "en",
    "am",
    "om",
    "so",
    "ti",
];
export const defaultLocale = "en";
export const localeNames = {
    en: "English",
    am: "Amharic",
    om: "Afaan Oromoo",
    so: "Somali",
    ti: "Tigrinya",
};
export const localeShortNames = {
    en: "EN",
    am: "AM",
    om: "OM",
    so: "SO",
    ti: "TI",
};
export function isLocale(value) {
    return locales.includes(value);
}
