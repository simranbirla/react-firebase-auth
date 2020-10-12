import React, { useState, useEffect } from "react";
import "./Album.css";
import Header from "./Header";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [click, setClick] = useState({});
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
    return;
  }, []);

  const fetchPhotos = async (id) => {
    setClick({ ...click, [id]: undefined ? true : !click[id] });
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
    const data = await response.json();
    setPhoto({ ...photo, [id]: data });
  };

  const showPhotos = (id) => {
    if (photo[id]) {
      const display = photo[id].map((pic) => {
        return (
          <div key={pic.id} className="photos_list">
            <h3>{pic.title}</h3>
            <img src={pic.url} alt={pic.title} />
          </div>
        );
      });
      return display;
    }
  };

  const displayAlbums = albums.map((item) => {
    return (
      <div key={item.id} className="albums">
        <div className="album__title" onClick={() => fetchPhotos(item.id)}>
          <h2 className="heading">
            <span> {item.id}.</span>
            {item.title} <i class="fas fa-images"></i>
          </h2>
        </div>

        <div className="albums_photo">
          {click[item.id] ? showPhotos(item.id) : false}
        </div>
      </div>
    );
  });

  return (
    <div className="album">
      <div className="header__album">
        <Header />
      </div>
      <div className="album__main"> {displayAlbums}</div>
    </div>
  );
};

export default Albums;
