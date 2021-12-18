import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Avatar } from "antd";
import { IoMenuOutline } from "react-icons/io5";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];
const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-navigation">
      <span className="menu-title">My React Blog</span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, idx) => {
            return (
              <li key={idx}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <Avatar
          className="ava-icon"
          src="https://joeschmoe.io/api/v1/random"
          size={36}
        />
      </div>
      <IoMenuOutline
        className="menu-icon"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
};

export default Navigation;
