// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvFQ8075rIl3UzEb_FYuihw7xwGK5KNSs",
    authDomain: "redux-758ec.firebaseapp.com",
    projectId: "redux-758ec",
    storageBucket: "redux-758ec.firebasestorage.app",
    messagingSenderId: "462457924045",
    appId: "1:462457924045:web:682fda4895de8e289dbc84",
    measurementId: "G-WDRW3HS9YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default app
// const analytics = getAnalytics(app);