import PropTypes from "prop-types"
import React from "react"

const ProjectTile = ({ projectData }) => (
  <div class="custom-column col-12 col-sm-6">
			<div class="project custom-border">
				<p class="title">
					{projectData.title}
				</p>
				<p class="description">
          {projectData.description}
				</p>
				<div class="social-media">
					{projectData.github != null &&
            <a class="github" href={projectData.github}>
              <i class="fab fa-github"></i>
            </a>
          }
					{projectData.youtube != null &&
            <a class="youtube" href={projectData.youtube}>
              <i class="fab fa-youtube"></i>
            </a>
					}
				</div>
        <div class="tags-container">
          {projectData.tags.map(tag => {
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
			</div>
		</div>
)

ProjectTile.propTypes = {
  projectData: PropTypes.object,
}

export default ProjectTile