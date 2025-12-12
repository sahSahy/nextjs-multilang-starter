import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tk", "ru", "en"],

  // Used when no locale matches
  defaultLocale: "tk",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/about": {
      tk: "/biz-hakda",
      en: "/about-us",
      ru: "/o-nas",
    },
    "/#": {},
  },
});
