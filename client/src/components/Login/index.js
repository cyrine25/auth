import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../js/action/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const { isLoading, isAuth } = useSelector((state) => state.authReducer);
  return (
    <div>
      {isLoading ? (
        <h1>......loading</h1>
      ) : isAuth ? (
        <Redirect to="/profile" />
      ) : (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={loginUser}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Login;
