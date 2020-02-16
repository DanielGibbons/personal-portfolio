import React from "react"

import LayoutBlank from "../components/layout-blank"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutBlank>
    <>
      <SEO title="404: Not found" />
      <div class="error-container">
        <h1>
          404
        </h1>
        <h2>Something's Gone Wrong</h2>
        <p>
          Page Not Found
        </p>
        <div class="return-home-button">
          <a href="/" role="button" class="btn btn-default btn-lg">Home</a>
        </div>
      </div>
    </>
  </LayoutBlank>
)

export default NotFoundPage
