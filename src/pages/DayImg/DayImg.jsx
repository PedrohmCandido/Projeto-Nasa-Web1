import { useEffect, useState } from "react";

import "./DayImg.css";

export default function DayImg() {
  const [image, setImage] = useState(null);

  function loadApi() {
    let url =
      "https://api.nasa.gov/planetary/apod?api_key=ufKpEept8mfPmBg9RDjjZdzhxjJd1OQv3kOoQLUg";
    fetch(url).then((response) =>
      response
        .json()
        .then((json) => {
          console.log(json);
          setImage(json);
        })
        .then((err) => console.log(err))
    );
  }

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div className="image-container">
      <h1>Image of the Day!</h1>
      {image ? (
        <div className="api-container">
        <h1>Title: {image.title}</h1>
          <div className="second-image-container">
            <img className="dayImage" src={image.url} />
            <p>{image.explanation}</p>
          </div>
        </div>
      ) : (
        <h1>carregando</h1>
      )}
    </div>
  );
}
