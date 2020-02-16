import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectTile from "../components/project-tile"
import Projects from "../data/projects"

const ProjectsPage = () => (
  <Layout title="Projects">
    <SEO title="Projects" />
    <div class="projects-container">
	    <div class="row justify-content-center">
        {Projects.map(projectData => {
          return <ProjectTile projectData={projectData} />;
        })}
      </div>
    </div>
  </Layout>
)

export default ProjectsPage