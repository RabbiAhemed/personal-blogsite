import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
// import { AuthContext } from "../../UserContext/UserContext";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Login.css";

const Login = () => {
  useTitle("Login - Bloodstream");

  return (
    <div className="mx-auto my-5">
      <h2
        className="text-center fw-bold text-success"
        id="login-header"
        data-aos="zoom-in"
      >
        it's good to see you again mate!
      </h2>

      <Form id="login-form">
        <Form.Group className="mb-3 text-start " controlId="formBasicEmail">
          <label className="text-muted fw-bold ">
            Email <span className="text-danger">*</span>
          </label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <label className="text-muted fw-bold">
            Password <span className="text-danger">*</span>
          </label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="fw-bold">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
