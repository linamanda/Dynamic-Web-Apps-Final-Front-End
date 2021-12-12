import React, { useEffect, useState } from "react";
import axios from "axios";
// Components
import PostCard from "../components/PostCard";
import AddPostForm from "../components/AddPostForm";

export const MOCK_POST = {
  imgSrc: `https://www.seekpng.com/png/detail/976-9765556_blue-feather-clip-art.png`,
  imgAlt: "feather profile image",
  username: "user",
  datetime: "12-11-2021",
  message: "test",
  pid: "1",
  uid: "1",
};

const url = `http://localhost:4000`;

function Home({ userInformation }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    // Get all posts from API
    axios
      .get(url)
      .then(function (response) {
        // successful request --- set posts
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <h1>Home</h1>
      <AddPostForm userInformation={userInformation} />
      {posts && posts.map((post, i) => <PostCard post={post} key={i} />)}.
    </div>
  );
}

export default Home;
