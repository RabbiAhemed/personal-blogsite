import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, name, description, image } = blog;
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text className="">{description}</Card.Text>

        <Button variant="primary" className="fw-bold">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
