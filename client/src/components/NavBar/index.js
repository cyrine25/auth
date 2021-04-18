import React from "react";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav";
import GuestNav from "./GuestNav";

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.authReducer);
  return <div>{isAuth ? <AuthNav /> : <GuestNav />}</div>;
};

export default NavBar;
