import React from "react";

function viewPost(postId) {
  window.location.href = `/post/${postId}`;
}

function PostCard({ post }) {
  return (
    <div className="PostCard" onClick={() => viewPost(post.pid)}>
      <div className="PostCardProfileImage">
        <img src={post.imgSrc} alt={post.imgAlt} />
      </div>
      <div className="PostCardUserInfo">
        <a href={`/user/${post.uid}`}>{post.username}</a>
        <p>{post.datetime}</p>
      </div>
      <div className="PostCardMessage">
        <p>{post.message}</p>
      </div>
    </div>
  );
}

export default PostCard;
