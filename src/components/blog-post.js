import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout"
import SEO from "./seo"
import BlogHeader from "./blog-header"
import Comments from "./comments"

const BlogPost = ({ blogData, children }) => (
  <Layout>
    <SEO title={`Blog | ${blogData.shortTitle}`} />
    <BlogHeader blogData={blogData} />
    <div class="blog-post-container">
      {children}
      <Comments blogTitle={blogData.shortTitle} blogId={blogData.id} />
    </div>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogPost
