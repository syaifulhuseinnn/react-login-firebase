import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_CZS9MgWFFPAB2qG7iPHXxemp7LAb1Rc",
  authDomain: "react-login-auth-904de.firebaseapp.com",
  projectId: "react-login-auth-904de",
  storageBucket: "react-login-auth-904de.appspot.com",
  messagingSenderId: "887151831276",
  appId: "1:887151831276:web:be6f598dd4aadf9ea11dc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
