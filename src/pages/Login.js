import React, { useCallback } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Components
import LoginForm from "../components/LoginForm";

function Login({ setErrors, setLoggedIn, setUserInformation }) {
  const loginUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            username: user.username,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          setErrors();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setErrors, setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper">
      <LoginForm loginUser={loginUser} />
    </div>
  );
}

export default Login;
