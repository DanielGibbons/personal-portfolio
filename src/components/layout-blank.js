/**
 * Layout blank component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../scss/style.scss"

const LayoutBlank = ({ children }) => (
    <main>{children}</main>
)

LayoutBlank.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBlank
