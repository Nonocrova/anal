import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Anal</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        <p>Upload</p>
      </Link>
    </div>
  );
};

export default NavBar;
