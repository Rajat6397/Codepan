import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


    const firebaseConfig = {
        apiKey: "AIzaSyBEc5s3rDyV55VWV4C4vBvuRonEe2elyOM",
        authDomain: "codepen-8d92e.firebaseapp.com",
        projectId: "codepen-8d92e",
        storageBucket: "codepen-8d92e.appspot.com",
        messagingSenderId: "290873170272",
        appId: "1:290873170272:web:78030367c5b08f1b066605"
      };
      


let app;
if (getApps().length === 0) {
  try {
    app = initializeApp(firebaseConfig);
  } catch (error) {
    console.error("Error initializing Firebase app:", error);
  }
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };