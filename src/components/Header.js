import React from "react";

function Header() {
  return (
    <>
      <header className="Header">
        <div className="Logo">Skim</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/user/:id">Profile</a>
          <a href="/login">Login</a>
          <a href="/sign-up">Sign Up</a>
          <a href="/">Log Out</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
