import i18n from "i18next";
import * as Localization from "expo-localization";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: callback => {
    return Localization.getLocalizationAsync().then(({ locale }) => {
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
        update: "Update",
        patientsCompleted: "completed patients ready to upload",
        upload: "Upload",
        uploading: "Uploading",
        incorrectPassword: "Incorrect password",
        couldNotFind: "Could not find server at that address",
        genericError:
          "An error occured. Ensure you are connected to the internet and check above details"
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
        title: "Tanpri konekte.",
        signIn: "Konekte",
        name: "Non",
        stationId: "Non seksyon",
        facilityId: "Seksyon pou ede",
        error: "Tanpri antre tout detay yo."
      },
      home: {
        title: "Chèche pasyan",
        home: "Akèy",
        station: "Pòs",
        facility: "Èd",
        update: "Aktyalize",
        patients: "Pasyan",
        inQueue: "annatant,",
        completed: "fini",
        startedAt: "Te Komanse le",
        edit: "Chanje"
      },
      edit: {
        editPatient: "Chanje enfomasyon pasyan?",
        cancel: "Anile",
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
        cancel: "Anile",
        continue: "Kontinye"
      },
      add: {
        addHeader: "Mete pasyan sou lis atant?",
        comments: "Komantè",
        cancel: "Anile",
        addAction: "Mete sou atant"
      },
      complete: {
        completedPatient: "Swivi pasyan fini",
        comments: "Komantè",
        back: "Tounen"
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
        station: "Poste",
        facility: "Aide",
        update: "Actualiser",
        patients: "Patient",
        inQueue: "en cours,",
        completed: "terminé",
        startedAt: "A commencer à",
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
        requesting: "Demander l’autorisation de la caméra",
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

  interpolation: {
    escapeValue: false // not needed for react as it does escape per default to prevent xss!
  }
});

export default i18n;
