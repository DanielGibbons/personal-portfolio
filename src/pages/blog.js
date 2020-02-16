import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTile from "../components/blog-tile"
import BlogPosts from "../data/blog-posts"

const BlogPage = () => (
  <Layout title="Blog">
    <SEO title="Blog" />
    <div class="posts-container">
      <div class="row justify-content-center">
        {BlogPosts.map(blogPostData => {
          return <BlogTile blogData={blogPostData} />;
        })}
      </div>
    </div>
  </Layout>
)

export default BlogPage