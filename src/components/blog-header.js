import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlogHeader = ({ blogData }) => (
  <div class="blog-header-container custom-border">
    <nav class="breadcrumb-container" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {blogData.title}
        </li>
      </ol>
    </nav>
    <h1 class="title">
      {blogData.title}
    </h1>
    <p class="date">
      {blogData.date}
    </p>
  </div>
)

BlogHeader.propTypes = {
  blogData: PropTypes.object,
}

export default BlogHeader