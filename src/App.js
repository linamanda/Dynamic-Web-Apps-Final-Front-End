import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// Styles
import "./App.css";
// Components
import FirebaseConfig from "./components/FirebaseConfig.js";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import Post from "./pages/Post.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";

export const baseUrl =
  process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function App() {
  // Track if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  // Check to see if there is any loading...
  const [loading, setLoading] = useState(true);

  // Store user information in state
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);

  // Ensure app is initialized when it is ready to be
  useEffect(() => {
    // Initialize Firebase
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  // Check to see if user is logged in
  // User loads page, check their status
  // Set state accordingly
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          // User is signed out
          setUserInformation({});
          setLoggedIn(false);
        }
        // Whenever state changes setLoading to false
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  if (loading || !appInitialized) return null;

  return (
    <>
      <Header logout={logout} loggedIn={loggedIn} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={!loggedIn ? <Landing /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={
              loggedIn ? (
                <Home userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !loggedIn ? (
                <Login
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/post/:id"
            element={loggedIn ? <Post /> : <Navigate to="/login" />}
          />
          <Route
            path="/user/:id"
            element={
              loggedIn ? (
                <Profile userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/sign-up"
            element={
              !loggedIn ? (
                <SignUp
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
