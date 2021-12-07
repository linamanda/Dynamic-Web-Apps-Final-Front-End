import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
// Components
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
