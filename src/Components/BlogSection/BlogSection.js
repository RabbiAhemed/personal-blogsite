import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogSection.css";
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/faa166e0-a13c-4528-a874-6ce9de555bce")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="fw-bold my-5">Read My Stories</h1>
      <Container className="blogs-container my-5">
        {blogs.slice(0, 9).map((blog) => (
          <BlogCard blog={blog} key={blog.id}></BlogCard>
        ))}
      </Container>
    </div>
  );
};

export default BlogSection;
