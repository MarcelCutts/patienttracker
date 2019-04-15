import i18n from "i18next";
import { Localization } from "expo-localization";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: callback => {
    return /*'en'; */ Localization.getLocalizationAsync().then(({ locale }) => {
      callback(locale);
    });
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n.use(languageDetector).init({
  fallbackLng: "en",

  resources: {
    en: {
      signIn: {
        title: "Please sign in",
        signIn: "Sign in",
        name: "Name",
        stationId: "Station ID",
        facilityId: "Facility ID"
      },
      home: {
        title: "Welcome",
        introduction: "This text comes from i18next and is provided in english."
      }
    },
    ht: {
      signIn: {
        title: "Tanpri, antre detay yo.", // This is "Please enter your details" so needs more work
        signIn: "Sove", // Technically "save"
        name: "itilizatè",
        stationId: "id estasyon",
        facilityId: "id klinik"
      },
      home: {
        title: "Willkommen",
        introduction: "Dieser Text ist von i18next und ist in deutsch."
      }
    }
  },

  // have a common namespace used around the full app
  ns: ["common"],
  defaultNS: "common",

  debug: true,

  // cache: {
  //   enabled: true
  // },

  interpolation: {
    escapeValue: false // not needed for react as it does escape per default to prevent xss!
  }
});

export default i18n;
