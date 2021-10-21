import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { labels } from "../structures/langRU";
const { logo } = labels;

const Navbar = () => (
  <nav className="navbar">
    <Link className="nav-logo" to="/">
      {logo}
    </Link>
  </nav>
);

export default Navbar;
