import React, { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

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

function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createNewUser = async (email: any, password: any) => {
    try {
      const createNewUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userCreated = createNewUser.user;
      console.log(userCreated);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode: errorCode, errorMessage: errorMessage });
    }
  };

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log({ email: email, password: password });
    createNewUser(email, password);
  };

  return (
    <main className="container">
      <div className="login">
        <h1>Sign Up</h1>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <input type="text" placeholder="Email" name="email" ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={passwordRef}
          />
          <button type="submit">Sign Up</button>
        </form>
        <span>
          Already have an acoount? <Link to="/">Login</Link>
        </span>
      </div>
    </main>
  );
}

export default SignUp;
