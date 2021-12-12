import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import PostCard from "../components/PostCard";
import AddPostForm from "../components/AddPostForm";
import { baseUrl } from "../App";

function Home({ userInformation }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    // Get all posts from API
    axios
      .get(baseUrl)
      .then(function (response) {
        // successful request --- set posts
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [userInformation.uid]);

  return (
    <div className="PageWrapper">
      <h1>Home</h1>
      <AddPostForm userInformation={userInformation} />
      {posts && posts.map((post, i) => <PostCard post={post} key={i} />)}
    </div>
  );
}

export default Home;
