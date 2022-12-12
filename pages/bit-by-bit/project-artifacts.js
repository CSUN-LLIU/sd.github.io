import React from 'react'
import styles from '../../styles/bit-by-bit/styles.module.css'

const ProjectArtifacts = () => {
  /*
  3. Project Artifacts
    Create placeholders for all development and research documents that your team will create here, for example:

    Prototype Design 
    Final Presentation
    Final Project Report
    Posters
    Videos
  */

  return (
    <div className={styles.container}>
      <h1>Project Artifacts</h1>
      <div>
          <h2>Prototype Design</h2>
      </div>
      <div>
        <h2>Final Presentation</h2>
        <u>
          <a href='https://docs.google.com/presentation/d/1BuEe8iQ_Ywgp9cOHZ5KoI-HhuYO0zJxLnIjdoz38bnM/edit?usp=sharing'>
          Senior Project Presentation (Fall 2022)
          </a>
        </u>
      </div>
      <div>
        <h2>Final Project Report</h2>
        <u>
          <a href='https://docs.google.com/document/d/1qJDFJC3khcYYVn2EBiwrGAlK04vukSo7/edit?usp=sharing&ouid=100717398472660853610&rtpof=true&sd=true'>
          Senior Design Project Document (Fall 2022)
          </a>
        </u>
      </div>
      <div>
        <h2> Posters </h2>
      </div>
      <div>
        <h2>Videos</h2>
      </div>
    </div>
  )
}

export default ProjectArtifacts
