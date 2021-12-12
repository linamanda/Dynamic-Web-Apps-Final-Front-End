import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../App";

function AddPostForm({ userInformation }) {
  const navigate = useNavigate();
  // Function to submit post
  function submitPost(e) {
    e.preventDefault();
    const message = e.currentTarget.postMessage.value;
    const imgSrc = `https://www.seekpng.com/png/detail/976-9765556_blue-feather-clip-art.png`;
    const imgAlt = "Feather";
    const uid = userInformation.uid;
    const username = userInformation.username;

    const url = `${baseUrl}/create?imgSrc=${imgSrc}&imgAlt=${imgAlt}&message=${message}&uid=${uid}&username=${username}`;

    axios
      .get(url)
      .then(function (response) {
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        // Handle error
        console.warn(error);
      });
  }

  return (
    <div className="AddPostForm">
      <form onSubmit={(e) => submitPost(e)}>
        <label htmlFor="postMessage">New Post</label>
        <input
          type="text"
          name="postMessage"
          placeholder="Enter message here..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddPostForm;
