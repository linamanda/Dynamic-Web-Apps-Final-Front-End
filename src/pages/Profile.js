import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import PostCard from "../components/PostCard";
import { baseUrl } from "../App";

function Profile({ userInformation }) {
  const [userPosts, setUserPosts] = useState();
  useEffect(() => {
    // Get all posts from API
    axios
      .get(`${baseUrl}/user/${userInformation.uid}`)
      .then(function (response) {
        // successful request --- set posts
        setUserPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [userInformation.uid]);

  return (
    <div className="PageWrapper">
      <div className="ProfileUserInfo">
        <img
          src="https://www.seekpng.com/png/detail/976-9765556_blue-feather-clip-art.png"
          alt="Feather"
        />
        <h1>{userInformation.displayName}</h1>
      </div>
      <div className="ProfileUserPosts">
        <h2>Posts</h2>
        {userPosts &&
          userPosts.map((post, i) => <PostCard post={post} key={i} />)}
      </div>
    </div>
  );
}

export default Profile;
