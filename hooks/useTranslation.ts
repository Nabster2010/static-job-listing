import { url } from "inspector";
import { useRouter } from "next/router";
import arTranslation from "../public/locales/ar/common.json";
import enTranslation from "../public/locales/en/common.json";

export const useTranslation = () => {
  const { locale, push, asPath } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : "en";
  const translation = locale === "ar" ? arTranslation : enTranslation;
  const targetLng = locale === "ar" ? "en" : "ar";
  return {
    locale,
    dir,
    lang,
    translation,
    asPath,
    push,
    targetLng,
  };
};
