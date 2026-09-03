// Configuration Firebase du site — à remplir avec les valeurs de ton projet
// (Firebase Console → Paramètres du projet → Général → App Web).
// Voir README.md pour la procédure complète pas à pas.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "REMPLACE_MOI",
  authDomain: "REMPLACE_MOI.firebaseapp.com",
  projectId: "REMPLACE_MOI",
  storageBucket: "REMPLACE_MOI.firebasestorage.app",
  messagingSenderId: "REMPLACE_MOI",
  appId: "REMPLACE_MOI",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Référence unique : tout le contenu éditable du site vit dans ce document.
export const SITE_DOC_PATH = ["site", "content"];
