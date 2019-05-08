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
        inQueue: "in queue,",
        completed: "completed",
        startedAt: "Started at",
        edit: "Edit"
      },
      edit: {
        editPatient: "Edit patient?",
        cancel: "Cancel",
        update: "Update",
        finish: "finish"
      },
      settings: {
        language: "Language",
        details: "Server details",
        address: "Address",
        password: "Password",
        update: "Update"
      },
      qr: {
        add: "Add manually",
        requesting: "Requesting camera permission",
        noAccess: "No access to camera"
      },
      enter: {
        enterID: "Enter Patient ID?",
        id: "Patient ID",
        cancel: "Cancel",
        continue: "Continue"
      }, 
      add: {
        addHeader: "Add patient to queue?",
        comments: "Comments",
        cancel: "Cancel",
        addAction: "Add to queue"
      },
      complete: {
        completedPatient: "Completed patient",
        comments: "Comments",
        back: "Back"
      }
    },
    ht: {
      signIn: {
        title: "Tanpri ouvri sesyon.", 
        signIn: "Anrijistre", 
        name: "Nom et siyati",
        stationId: "id estasyon",
        facilityId: "id klinik",
        error: "Tanpri antre tout detay yo."
      },
      home: {
        title: "Suivi pasyan an",
        home: "Akèy",
        station: "Estasyon",
        facility: "Klinik",
        update: "Aktyalizasyon",
        patients: "Pasyan yo",
        inQueue: "ki ap tan,",
        completed: "fini", // translation wasn't in creole dictionary, confirm with Vanessa
        startedAt: "Komanse a",
        edit: "Chanje"
      },
      edit: {
        editPatient: "Chanje pasyan?",
        cancel: "Anulè",
        update: "Aktyalizasyon",
        finish: "Fini"
      },
      settings: {
        language: "Langaj",
        details: "Detay sou sèvè a",
        address: "Adres",
        password: "Mod pas",
        update: "Mete a jou"
      },
      qr: {
        add: "Ajoute manyèlman",
        requesting: "Mande pou itilize kamera",
        noAccess: "Pa gen aksè ak kamera"
      },
      enter: {
        enterID: "Antre NIH?",
        id: "NIH",
        cancel: "Anulè",
        continue: "Kontinye"
      }, 
      add: {
        addHeader: "Ajoute pasyan nan lis datant?",
        comments: "Kòmantè",
        cancel: "Anulè",
        addAction: "Ajoute nan lis datant"
      },
      complete: {
        completedPatient: "Fini ak pasyan",
        comments: "Kòmantè",
        back: "Tounen"
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
