import React from "react";
import { Link } from "gatsby";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      // date: postEdge.node.fields.date,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  const urls = [
    "https://images.unsplash.com/photo-1458022479614-14737487b68c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNjI2ODU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=320",
    "https://images.unsplash.com/photo-1426901013385-803d40bd5558?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNjI2ODYy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=320",
    "https://images.unsplash.com/photo-1427847888090-7b66d035cdaa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNjI2OTEw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=320",
    "https://images.unsplash.com/photo-1458022479614-14737487b68c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNjI2ODU0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=320",
  ];

  return (
    <ul class="post-previews--list list--wrapper0">
      {
        /* Your post list here. */
        postList.map((post, index) => (
          <Link className="post-previews--item" to={post.path} key={post.title}>
            <figure className="post-previews--figure">
              {/* <img src={urls[index]} alt=" " /> */}
              <img src={post.cover} alt="" />
            </figure>
            <div className="post-previews--content">
              <h3 className="post-previews--title">
                {post.title} {post.cover} {++index}
              </h3>
              <p className="post-previews--details">
                <time>{post.date}</time>
              </p>
              {/* <p> */}
              {/* <span className="btn">Read more</span> */}
              {/* </p> */}
            </div>
          </Link>
        ))
      }
    </ul>
  );
}

export default PostListing;
