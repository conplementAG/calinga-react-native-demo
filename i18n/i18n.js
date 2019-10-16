import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en.json";
import de from "./resources/de.json";
import AsyncStorage from "@react-native-community/async-storage";
import { CalingaBackend } from "i18next-calinga-backend";

const backendOptions = {
  serviceBaseUrl: "https://dev.cali.conplement.cloud/api/v1/",
  version: "v1",
  cache: {
    read: async key => {
      try {
        return await AsyncStorage.getItem(key);
      } catch (e) {
        console.error(e);
      }
    },
    write: async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (e) {
        console.error(e);
      }
    }
  },
  resources: {
    en: {
      default: en
    },
    de: {
      default: de
    }
  }
};

i18n
  .use(initReactI18next)
  .use(CalingaBackend)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: backendOptions,
    keySeparator: false,
    fallbackLng: "en",
    lng: "en",
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    defaultNS: "default"
  });

export default i18n;
