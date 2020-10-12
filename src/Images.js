import React, { useState, useEffect } from "react";
import Image from "./Image";
import "./Image.css";
import Header from "./Header";

const Images = () => {
  const [image, setImage] = useState();
  const [photos, setPhotos] = useState([]);

  const handleInput = (e) => {
    setImage(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCESS}&page=1&query=flowers`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.results));
    return;
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCESS}&page=1&query=${image}`
    );
    const data = await response.json();
    setPhotos(data.results);
  };

  /* const renderPhotos = () => {
    if (photos) {
      const display = photos.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.urls.regular} alt={photo.description} />
          </div>
        );
      });
      return display;
    }
  };*/

  const displayImages = photos.map((photo) => {
    return <Image image={photo} key={photo.id} />;
  });

  return (
    <div className="images">
      <div className="images__header">
        <Header />
      </div>
      <div className="images__form">
        <form onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Search Images"
            onChange={handleInput}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="image-list">{displayImages}</div>
    </div>
  );
};

export default Images;
