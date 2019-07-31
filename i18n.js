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
<<<<<<< HEAD
=======
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
>>>>>>> 17c7f99619f0d4f405d364ee0f94377aa796caa3
      }
    },
    ht: {
      signIn: {
<<<<<<< HEAD
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
=======
        title: "Tanpri konekte.",
        signIn: "Konekte",
        name: "Non",
        stationId: "Non seksyon/zòn",
        facilityId: "Seksyon pou ede",
        error: "Tanpri antre tout detay yo."
      },
      home: {
        title: "Chèche pasyan",
        home: "Akèy",
        station: "Pòs, plas",
        facility: "Asistans / Èd",
        update: "Aktyalize",
        patients: "Pasyan",
        inQueue: "annatant,",
        completed: "fini",
        startedAt: "Te Komanse le / nan",
        edit: "Chanje"
      },
      edit: {
        editPatient: "Chanje enfomasyon pasyan?",
        cancel: "Anile / Efase",
        update: "Aktyalize",
        finish: "Fini"
      },
      settings: {
        language: "Lang",
        details: "Detay sèvè",
        address: "Adrès",
        password: "Kòd sekrè",
        update: "Aktyalize"
      },
      qr: {
        add: "Rantre ak men",
        requesting: "Mande otorizasyon kamera",
        noAccess: "Pa gen aksè pou kamera"
      },
      enter: {
        enterID: "Rantre kòd pasyan?",
        id: "Kòd pasyan",
        cancel: "Anile / Efase",
        continue: "Kontinye"
      },
      add: {
        addHeader: "Mete pasyan sou lis atant?",
        comments: "Komantè",
        cancel: "Anile / Efase",
        addAction: "Mete sou atant"
      },
      complete: {
        completedPatient: "Swivi pasyan fini",
        comments: "Komantè",
        back: "Tounen"
>>>>>>> 17c7f99619f0d4f405d364ee0f94377aa796caa3
      }
    },
    fr: {
      signIn: {
        title: "Connecter s’il vous plait.",
        signIn: "Se connecter",
        name: "Nom",
        stationId: "Nom du poste",
        facilityId: "Bureau d’assistance",
        error: "Veuillez-vous entrer tous les détails, s'il vous plait."
      },
      home: {
        title: "Localiser le patient",
        home: "Accueil",
        station: "Poste / Section",
        facility: "Assistance / Aide",
        update: "Actualiser",
        patients: "Patient",
        inQueue: "en cours,",
        completed: "terminé",
        startedAt: "A commencer le/à",
        edit: "Modifier"
      },
      edit: {
        editPatient: "Modifier informations patient?",
        cancel: "Annuler",
        update: "Actualiser",
        finish: "Terminer"
      },
      settings: {
        language: "Langue",
        details: "Détails du serveur",
        address: "Adresse",
        password: "Mot de passe",
        update: "Actualiser"
      },
      qr: {
        add: "Compléter manuellement",
        requesting: "Demander l’autorisation de la caméra",
        noAccess: "Pas d’accès à la caméra"
      },
      enter: {
        enterID: "Insérer code patient?",
        id: "Code patient",
        cancel: "Annuler",
        continue: "Continuer"
      },
      add: {
        addHeader: "Ajouter le patient à la liste d’attente?",
        comments: "Commentaires",
        cancel: "Annuler",
        addAction: "Ajouter à la liste d’attente"
      },
      complete: {
        completedPatient: "Suivi du patient terminé",
        comments: "Commentaires",
        back: "Retour"
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
