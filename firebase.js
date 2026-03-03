import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHcGidXsL1clkYafY34nIlVpfsmCbtza8",
  authDomain: "controleprocessosnudof.firebaseapp.com",
  projectId: "controleprocessosnudof",
  storageBucket: "controleprocessosnudof.firebasestorage.app",
  messagingSenderId: "228016976823",
  appId: "1:228016976823:web:e1135654b8803da5676e32",
  measurementId: "G-T7NS25RX0G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
