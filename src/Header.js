import React from "react";
import { Link } from "react-router-dom";
import app from "./base";
import "./Home.css";

const Header = () => {
  return (
    <>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <div className="header nav">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/images">Images</Link>
        <Link to="/albums">Albums</Link>
      </div>
    </>
  );
};

export default Header;
