import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ( {siteTitle }) => (
  <header>
    <nav className="navbar fixed-top custom-navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={"nav-item " + (window.location.pathname === "/" ? "active" : "")}>
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className={"nav-item " + (window.location.pathname.includes("/blog") ? "active" : "")}>
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className={"nav-item " + (window.location.pathname === "/projects" ? "active" : "")}>
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="color-bar" id="color-bar">
      <div className="bar bar-1"></div>
      <div className="bar bar-2"></div>
      <div className="bar bar-3"></div>
      <div className="bar bar-4"></div>
      <div className="bar bar-5"></div>
      <div className="bar bar-6"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
