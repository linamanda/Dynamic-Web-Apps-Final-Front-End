import React, { useCallback } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// Components
import CreateUserForm from "../components/CreateUserForm";

function SignUp({ setErrors, setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const username = e.currentTarget.username.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          updateProfile(user, {
            displayName: username,
          }).then(function () {
            // Update successful
            setLoggedIn(true);
            setUserInformation({
              email: user.email,
              username: user.username,
              uid: user.uid,
              accessToken: user.accessToken,
            });
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
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default SignUp;
