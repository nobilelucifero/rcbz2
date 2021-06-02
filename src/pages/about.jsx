import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

function AboutPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="row">
          <h1>About me</h1>
          <p>
            Creative Agency, 4-people start-up, hypergrowth company, 14K+
            employees corporation, freelance Product consultant. Kind of tried
            them all here!
          </p>
          <p>
            Like many millenials I enjoy travel, and I've grown to appreaciate
            brunch (my parents still can't understand the allure of it).
          </p>
          <p>
            What I enjoy the most though is the boring stuff. Meeting friends
            for long walks, read, draw, import Italian biscotti and other nonna
            goods whenever I can. 🍪
          </p>
          <p>
            2020 goals: read more books, get some decent exercise done, and
            launch at least two side-projects I've been cooking up for too long
            make it sanely out of a global pandemic. 😅
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
