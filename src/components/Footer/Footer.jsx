import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="row row--last footer">
      {/* <div className="notice-container"> */}
      {/* <h2>Let's get in touch</h2> */}

      <UserLinks config={config} labeled />
      <p>{copyright}</p>
      {/* <Link to={url}>RSS</Link> */}
      {/* <h4>
          Based on{" "}
          <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </a>
          .
        </h4> */}
      {/* </div> */}
    </footer>
  );
}

export default Footer;
