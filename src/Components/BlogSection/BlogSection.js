import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogSection.css";
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id}></BlogCard>
      ))}
    </div>
  );
};

export default BlogSection;
