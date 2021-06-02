import React from "react";
import PostListing from "../PostListing/PostListing";
// import "./About.css";

function LatestPosts({ data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <div className="row latest-posts">
      <h2>Recent articles</h2>
      <PostListing postEdges={postEdges} />
    </div>
  );
}

export default LatestPosts;
