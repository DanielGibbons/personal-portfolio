import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlogTile = ({ blogData }) => (
  <div class="custom-column col-12 col-sm-6">
    <div class="post custom-border">
      <Link to={`/blog/${blogData.id}`}>
        <p class="title">
          {blogData.title}
				</p>
        <p class="date">
          {blogData.date}
				</p>
        <p class="description">
        {blogData.description}
				</p>
        <div class="tags-container">
          {blogData.tags.map(tag => {
            return (
              <div class={`tag ${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                <div class="tag-icon">
                  <i class="fas fa-tags"></i>
                </div>
                <p class="tag-name">
                  {tag}
                </p>
              </div>
            )
          })}
				</div>
      </Link>
    </div>
  </div>
)

BlogTile.propTypes = {
  blogData: PropTypes.object,
}

export default BlogTile