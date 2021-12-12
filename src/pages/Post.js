import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import PostCard from "../components/PostCard";

const url = `http://localhost:4000`;

function Post() {
  const [post, setPost] = useState({});
  let { id } = useParams();

  useEffect(() => {
    // Get a single post from API
    axios
      .get(`${url}/post/${id}`)
      .then(function (response) {
        // successful request --- set post
        setPost(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [id]);

  return (
    <div className="PageWrapper SinglePost">
      <PostCard post={post} />
    </div>
  );
}

export default Post;
