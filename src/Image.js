import React, { useState, useEffect, useRef } from "react";

const Image = ({ image }) => {
  const imageRef = useRef(null);
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imageRef.current.addEventListener("load", calcSpans);
    return;
  }, []);

  const calcSpans = () => {
    const height = imageRef.current.clientHeight;

    const span = Math.ceil(height / 10);

    setSpans(span);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }} className="image-contain">
      <img src={image.urls.regular} alt={image.title} ref={imageRef} />
    </div>
  );
};

export default Image;
