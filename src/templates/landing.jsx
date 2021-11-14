import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import Bio from "../components/Info/Bio";
import LatestPosts from "../components/Landing/LatestPosts";
import Experiences from "../components/Landing/Experiences";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";

function Landing({ data }) {
  // function Landing({ data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="landing-container">
        {/* <div className="div"> */}
        <Helmet title={config.siteTitle} />
        <SEO />
        <Bio />
        {/* </div> */}
        {/* <div className="posts-container"> */}
        {/* <hr /> */}
        <LatestPosts data={data} />
        {/* <hr /> */}
        <Experiences config={config} labeled />
        <Footer config={config} />
        {/* </div> */}
      </div>
    </Layout>
  );
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            subtitle
            tags
            cover
            date(formatString: "MMM YYYY")
          }
        }
      }
    }
  }
`;
