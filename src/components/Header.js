import React from "react";

function Header({ logout, loggedIn, userInformation }) {
  return (
    <header className="HeaderWrapper">
      <div className="Header">
        {!loggedIn && (
          <>
            <nav>
              <div className="Logo">Skim</div>
              <div className="HeaderRight">
                <a href="/login">Login</a>
                <a href="/sign-up">Sign Up</a>
              </div>
            </nav>
          </>
        )}
        {loggedIn && (
          <>
            <nav>
              <div className="HeaderLeft">
                <a href="/home">Home</a>
              </div>
              <div className="Logo">Skim</div>
              <div className="HeaderRight">
                <a href={`/user/${userInformation.uid}`}>Profile</a>
                <a href="/" onClick={() => logout()}>
                  Log Out
                </a>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
