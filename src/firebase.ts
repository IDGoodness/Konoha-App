import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDRE6Fs8BMZVPqbNQ3Cw7nyDLAh1wKZ6zI",
    authDomain: "konoha-app-3e063.firebaseapp.com",
    projectId: "konoha-app-3e063",
    storageBucket: "konoha-app-3e063.firebasestorage.app",
    messagingSenderId: "557540801155",
    appId: "1:557540801155:web:ff0430311351929a36b9b6",
    measurementId: "G-P71DLVYB02"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
