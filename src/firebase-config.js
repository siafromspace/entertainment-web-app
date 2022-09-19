import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFgvzfGUngmtpt5FEqaLeLTPnROlypRS8",
    authDomain: "entertainment-web-app-81ab4.firebaseapp.com",
    projectId: "entertainment-web-app-81ab4",
    storageBucket: "entertainment-web-app-81ab4.appspot.com",
    messagingSenderId: "687644379461",
    appId: "1:687644379461:web:d1ae2f0077b94bad0dd62c",
    measurementId: "G-71MV382MXK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);