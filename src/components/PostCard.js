import React from "react";

function viewPost(postId) {
  window.location.href = `/post/${postId}`;
}

function PostCard({ post }) {
  const dateTime = new Date(post.timestamp.seconds * 1000).toLocaleString();
  return (
    <div className="PostCard" onClick={() => viewPost(post.pid)}>
      <div className="PostCardProfileImage">
        <img src={post.imgSrc} alt={post.imgAlt} />
      </div>
      <div className="PostCardUserInfo">
        <p>{post.username}</p>
        <p>{dateTime}</p>
      </div>
      <div className="PostCardMessage">
        <p>{post.message}</p>
      </div>
    </div>
  );
}

export default PostCard;
