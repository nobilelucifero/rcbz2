import React from "react";
import "./Experiences.css";

function Experiences({ config, labeled }) {
  function getExperiencesElements() {
    const { Experience } = config;

    return experiences.map((experience) => (
      <li className="list--item">
        <h4 className="list--item--title">{experience.company} </h4>
        <p className="list--item--desc">
          {experience.role} <br />
          <small>
            {experience.start}&ndash;{experience.end}
          </small>
        </p>
      </li>
    ));
  }

  const { experiences } = config;
  if (!experiences) {
    return null;
  }
  return (
    <div className="row experiences">
      <h2>Experience</h2>
      <p className="display-2">
        10 years of experience at the intersection of Design, Product,
        Development. <br />
        From agencies and small startups, to large orgs.
      </p>
      <ul className="list--wrapper">{getExperiencesElements()}</ul>
    </div>
  );
}

export default Experiences;
