/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Footer } from "./footer"

import "../bootstrap/bootstrap-reboot.min.css"
import "../bootstrap/bootstrap-grid.min.css"
import "../bootstrap/bootstrap.min.css"
import "../scss/style.scss"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="page">
        <div className="container view">
          {title != null &&
            <div class="page-title-container">
              <h1 class="page-title">
                {title}
              </h1>
            </div>
          }
          <main>{children}</main>
        </div>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
