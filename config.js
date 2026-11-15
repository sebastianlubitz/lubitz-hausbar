// Firebase-Projektdaten: in der Firebase-Konsole unter
// Projekteinstellungen → Allgemein → Meine Apps → Web-App → „SDK-Einrichtung und -Konfiguration“ (Config).
// Diese Werte sind nicht geheim: Sie stehen in jeder Firebase-Web-App öffentlich im Code.
// Geschützt wird die Datenbank über die Regeln in firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyCLW8Y-IqrIFcneJ5-TxpOZ62y_VjaGeJk",
  authDomain: "lubitz-hausbar.firebaseapp.com",
  projectId: "lubitz-hausbar",
  storageBucket: "lubitz-hausbar.firebasestorage.app",
  messagingSenderId: "672682844794",
  appId: "1:672682844794:web:22dd29031dff016d1111c3"
};

// Deine Nutzer-ID. Nach der ersten Anmeldung zeigt die Seite sie dir an.
// Nur dieses Konto darf Bestand und Vorrat ändern.
export const OWNER_UID = "";
