import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Home.css";
const Home = () => {
  const [image, setImage] = useState();
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA}`
    )
      .then((res) => res.json())
      .then((data) => setImage(data));

    return;
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <Header />
      </div>
      {image ? (
        <div className="home__main">
          <div className="home__main text">
            <h2>{image.title}</h2>
            <p>{image.explanation}</p>
          </div>
          <div className="home__main image">
            <img src={image.hdurl} alt={image.title} />
          </div>
        </div>
      ) : (
        <div>LOADING </div>
      )}
    </div>
  );
};

export default Home;
