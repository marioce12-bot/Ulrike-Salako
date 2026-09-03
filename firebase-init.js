// Configuration Firebase du site — à remplir avec les valeurs de ton projet
// (Firebase Console → Paramètres du projet → Général → App Web).
// Voir README.md pour la procédure complète pas à pas.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkLEu-aXlY9ZK7iB4k5A-Axrjy_Rn3T1A",
  authDomain: "clariv-tasks.firebaseapp.com",
  projectId: "clariv-tasks",
  storageBucket: "clariv-tasks.firebasestorage.app",
  messagingSenderId: "956522590405",
  appId: "1:956522590405:web:340eb1a2a7e595411bc0ac",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Référence unique : tout le contenu éditable du site vit dans ce document.
export const SITE_DOC_PATH = ["site", "content"];
