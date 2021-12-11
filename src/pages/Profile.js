import React from "react";
// Components
import PostCard from "../components/PostCard";
import { MOCK_POST } from "./Home";

function Profile({ userInformation }) {
  console.log({ userInformation });
  return (
    <div className="PageWrapper">
      <div className="ProfileUserInfo">
        <img src="asdkj.jpg" alt="asdkaj" />
        <h1>{userInformation.displayName}</h1>
      </div>

      <div className="ProfileUserPosts">
        <h2>Posts</h2>
        <PostCard post={MOCK_POST} />
      </div>
    </div>
  );
}

export default Profile;
