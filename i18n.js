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
        facilityId: "Facility ID",
        error: "Please enter all details"
      },
      home: {
        title: "Patient tracker",
        home: "Home",
        station: "Station",
        facility: "Facility",
        update: "Update",
        patients: "Patients",
        inQueue: "in queue",
        completed: "completed",
        startedAt: "Started at",
        edit: "Edit"
      }
    },
    ht: {
      signIn: {
        title: "Tanpri, antre detay yo.", // This is "Please enter your details" so needs more work
        signIn: "Sove", // Technically "save"
        name: "itilizatè",
        stationId: "id estasyon",
        facilityId: "id klinik",
        error: "Tanpri, antre detay yo."
      },
      home: {
        title: "Patient tracker-HT",
        home: "Home-HT",
        station: "Estasyon",
        facility: "Klinik",
        update: "Aktyalizasyon",
        patients: "Patients-HT",
        inQueue: "in queue-HT",
        completed: "completed-HT",
        startedAt: "Started at-HT",
        edit: "Edit"
      }
    }
  },

  // have a common namespace used around the full app
  ns: ["common"],
  defaultNS: "common",

  debug: true,

  interpolation: {
    escapeValue: false // not needed for react as it does escape per default to prevent xss!
  }
});

export default i18n;
