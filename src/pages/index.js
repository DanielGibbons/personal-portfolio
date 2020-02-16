import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mugshot from "../images/about/mugshot.png"

const IndexPage = () => (
  <Layout title="About">
    <SEO title="About" />
    <div class="about-container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 align-self-center">
          <div class="mugshot">
            <img src={Mugshot} alt="Mugshot" />
          </div>
        </div>
        <div class="col-12 col-md-8 align-self-center">
          <p class="about-description custom-border">
            I graduated from the University of Leeds in the summer of 2019 with a Masters degree in
            Electronic Engineering. During my degree I had a 1 year placement at <a href="https://www.arm.com/">Arm</a> where I
            worked primarily as an Embedded Software Engineer and got the bug <i class="fas fa-bug"></i> for developing
            software (pun intended). Since graduating I've been working at <a href="https://www.x-labsystems.co.uk">X-Lab</a> doing both <a href="https://twitter.com/hashtag/dev?lang=en">#dev</a> and <a href="https://twitter.com/hashtag/devops?lang=en">#devops</a>.
            In this role I've been working with a range of languages and technologies including C#, Javascript, Terraform,
            Azure and the Elastic stack.
          </p>
        </div>
        <div class="col-12 align-self-center">
          <p class="site-description custom-border">
            Hopefully you find something useful here! My main aim is to share things I've learnt and build a collection of
            useful resources/tips for software related endeavours. Be warned however as there may be the odd piece of content
            not software related.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
