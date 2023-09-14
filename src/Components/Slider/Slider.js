import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/faa166e0-a13c-4528-a874-6ce9de555bce")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{blogs.name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
