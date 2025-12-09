import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import * as en from "./en.json"
import * as az from "./az.json"
import * as ru from "./ru.json"

export const languages = [
    {
        title: "English",
        value: "en"
    },
    {
        title: "Azərbaycan",
        value: "az"
    },
    {
        title: "Russian",
        value: "ru"
    },
]

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            az: {
                translation: az
            },
            ru: {
                translation: ru
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })