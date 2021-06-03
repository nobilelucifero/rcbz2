import React from "react";
import { Link } from "gatsby";
import Logo from "../../assets/silly-guy.svg";

function Header() {
  const activeClass = "header--nav--item__active";
  return (
    <header className="row header">
      <div className="header--title">
        <Link to="/">
          <img src={Logo} alt=" " />
          <span>Riccardo Buzzotta</span>
          {/* <span>Riccardo Buzzotta</span> */}
        </Link>
      </div>
      <nav className="header--nav">
        <Link
          to="/"
          className="header--nav--item"
          activeClassName={activeClass}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="header--nav--item"
          activeClassName={activeClass}
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="header--nav--item"
          activeClassName={activeClass}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
