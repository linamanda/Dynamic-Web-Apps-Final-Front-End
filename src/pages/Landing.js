import React from "react";

function Landing() {
  return (
    <div className="LandingContent">
      <h2 className="LandingTitle">Welcome to Skim</h2>
      <p className="LandingDesc">
        Skim is a way for you to get caught up on the people you care about
        quickly!
      </p>
      <p className="LandingPrompt">Get started today.</p>
      <a href="/sign-up">Sign Up</a>
    </div>
  );
}

export default Landing;
