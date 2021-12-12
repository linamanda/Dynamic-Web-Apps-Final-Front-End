import React from "react";

function Header({ logout, loggedIn, userInformation }) {
  return (
    <header className="HeaderWrapper">
      <div className="Header">
        <div className="Logo">Skim</div>
        <nav>
          {!loggedIn && (
            <>
              <a href="/login">Login</a>
              <a href="/sign-up">Sign Up</a>
            </>
          )}

          {loggedIn && (
            <>
              <a href="/home">Home</a>
              <a href={`/user/${userInformation.uid}`}>Profile</a>
              <a href="/" onClick={() => logout()}>
                Log Out
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
