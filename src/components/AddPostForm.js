import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = `http://localhost:4000`;

function AddPostForm({ userInformation }) {
  const navigate = useNavigate();
  // Function to submit post
  function submitPost(e) {
    e.preventDefault();
    const message = e.currentTarget.postMessage.value;
    const imgSrc = `https://www.seekpng.com/png/detail/976-9765556_blue-feather-clip-art.png`;
    const imgAlt = "Feather";
    const uid = userInformation.uid;
    const username = userInformation.displayName;

    const url = `${baseUrl}/create?message=${message}&imgSrc=${imgSrc}&imgAlt=${imgAlt}&uid=${uid}&username=${username}`;

    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
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
        <label htmlFor="postMessage">Message</label>
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
