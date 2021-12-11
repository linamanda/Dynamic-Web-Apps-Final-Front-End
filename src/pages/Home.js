import React from "react";
// Components
import PostCard from "../components/PostCard";

export const MOCK_POST = {
  imgSrc: `https://www.seekpng.com/png/detail/976-9765556_blue-feather-clip-art.png`,
  imgAlt: "feather profile image",
  username: "user",
  datetime: "12-11-2021",
  message: "test",
  pid: "1",
  uid: "1",
};

function Home({ userInformation }) {
  return (
    <div className="PageWrapper">
      <h1>Home</h1>
      <PostCard post={MOCK_POST} />
    </div>
  );
}

export default Home;
