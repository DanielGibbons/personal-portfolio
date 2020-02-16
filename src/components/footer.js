import PropTypes from "prop-types"
import React from "react"

export class Footer extends React.Component {

  onArrowClick(e) {
    e.preventDefault();
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  render() {
    const { siteTitle } = this.props
    return (
      <footer className="custom-footer">
      <div className="social-media-container">
        <div className="social-media">
          <a href="https://www.instagram.com/danielgibbonsx">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="social-media">
          <a href="https://uk.linkedin.com/in/dgibbons1">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="social-media">
          <a href="https://github.com/DanielGibbons">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.strava.com/athletes/3681345">
            <i className="fab fa-strava"></i>
          </a>
        </div>
      </div>
      <p className="copyright-notice">Copyright &copy; 2019 - {siteTitle}</p>
      <div className="scroll-top-arrow-container">
        <i className="fas fa-arrow-up scroll-top-arrow" onClick={this.onArrowClick}></i>
      </div>
    </footer>
    )
  }
}
