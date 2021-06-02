import React from "react";
import { Link } from "gatsby";
import "./UserLinks.css";

function UserLinks({ config, labeled }) {
  const url = config.siteRss;
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <>
        <a className="inline-list--item" href={link.url} key={link.label}>
          {/* <button type="button">{labeled ? link.label : ""}</button> */}
          <span>{labeled ? link.label : ""}</span>
        </a>
      </>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return (
    <div className="user-links">
      <nav className="inline-list">
        {getLinkElements()}
        <Link className="inline-list--item" to={url}>
          RSS
        </Link>
      </nav>
    </div>
  );
}

export default UserLinks;
