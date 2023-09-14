import React from "react";
import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle("About - The British Lad");
  return (
    <div>
      <h1 className="me-auto fw-bold">About Me</h1>
      <br />
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        nostrum explicabo sequi enim facilis quibusdam fugiat soluta at culpa in
        voluptatum maiores sint veniam modi ducimus accusantium, repellat
        assumenda id neque? Hic nihil ad enim quisquam libero deleniti atque
        tenetur minima culpa? Accusantium, distinctio dolor cum rem ducimus sit
        similique!
      </h4>
    </div>
  );
};

export default About;
