import React from "react";
import { Button, Card } from "react-bootstrap";

const BlogCard = ({ blog }) => {
  const { id, name, description, image } = blog;
  // console.log(blog);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
