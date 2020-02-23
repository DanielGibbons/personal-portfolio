import React from "react"
import { Disqus } from "gatsby-plugin-disqus"
import { useStaticQuery, graphql } from "gatsby"

const Comments = ({ blogTitle, blogId }) => {
  const data = useStaticQuery(graphql`
    query SiteBaseUrlQuery {
      site {
        siteMetadata {
          baseUrl
        }
      }
    }
  `)
  
  const disqusConfig = {
      url: `${data.site.siteMetadata.baseUrl}/blog/${blogId}`,
      identifier: `/blog/${blogId}`,
      title: {blogTitle}
  };

  return (
      <div class="custom-border comments-container">
        <Disqus config={disqusConfig} />
      </div>
  )
}

export default Comments
