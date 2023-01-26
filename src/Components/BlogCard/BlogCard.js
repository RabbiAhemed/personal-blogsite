import React from "react";
import { Button, Card } from "react-bootstrap";

const BlogCard = ({ blog }) => {
  const { userId, title, body } = blog;
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
