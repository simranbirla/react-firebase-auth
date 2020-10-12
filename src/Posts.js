import React, { useState, useEffect } from "react";
import "./Post.css";
import Header from "./Header";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [click, setClick] = useState({});
  const [comments, setComments] = useState({});
  const num = 1;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    return;
  }, []);

  const fetchPost = async (id) => {
    setClick({ ...click, [id]: undefined ? true : !click[id] });
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await response.json();
    setComments({ ...comments, [id]: data });
  };

  const showComments = (id) => {
    if (comments[id]) {
      const display = comments[id].map((comment) => {
        return (
          <div key={comment.id} className="comment__contain">
            <h3 className="comment__name ">
              <i className="far fa-user"></i>
              {comment.name}
            </h3>
            <p className="comment__body">{comment.body}</p>
            <p className="comment__email">{comment.email}</p>
          </div>
        );
      });
      return display;
    }
  };

  return (
    <div>
      <div className="header__post">
        <Header />
      </div>
      {posts.map((post, index) => {
        return (
          <div
            key={post.id}
            className="post__contain-body"
            style={{ animation: `show ${(index + 1) * 0.4}s linear` }}
          >
            <div className="post__contain num">{post.id}</div>
            <h2 className="post__contain header">{post.title}</h2>
            <p className="post__contain body">{post.body}</p>
            <div
              className="post__contain plus"
              onClick={() => fetchPost(post.id)}
            >
              +
            </div>
            <div className="comments">
              {click[post.id] ? showComments(post.id) : false}
            </div>
          </div>
        );
      })}
      <h1>POST</h1>
    </div>
  );
};

export default Post;
