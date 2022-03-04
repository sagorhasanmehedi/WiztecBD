import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // reditect to homepage
  let navigate = useNavigate();
  const go_homepage = () => {
    navigate("/");
  };

  return (
    <div className="nav_bar">
      <div className="logo">
        <img
          src="https://gngbd.com/wp-content/uploads/2022/02/Layer-1.png"
          alt=""
          srcSet=""
          onClick={go_homepage}
        />
      </div>
      <div className="page_route">
        <ul>
          <Link className="link_style" to="/">
            <li>HOME</li>
          </Link>
          <Link className="link_style" to="about">
            <li>ABOUT</li>
          </Link>
          <Link className="link_style" to="Dashbord">
            <li>DASHBORD</li>
          </Link>
          <Link className="link_style" to="Login">
            <li>LOGIN</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
