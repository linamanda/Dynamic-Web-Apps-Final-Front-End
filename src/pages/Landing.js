import React from "react";

function Landing() {
  return (
    <div className="LandingContent PageWrapper">
      <h1 className="LandingTitle">Welcome to Skim</h1>
      <p className="LandingDesc">
        Skim is a way for you to get caught up on the people you care about
        quickly!
      </p>
      <div className="LandingCTO">
        <p>Get started today.</p>
        <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  );
}

export default Landing;
