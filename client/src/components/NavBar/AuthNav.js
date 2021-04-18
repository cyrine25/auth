import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../js/action/authAction";

const AuthNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="Navbar.Brand">
          Home
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <Link to="/profile">{user.name + " " + user.lastName}</Link>
          </Navbar.Text>
          <Link to="/login">
            <Button variant="outline-info" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AuthNav;
