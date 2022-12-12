import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projectTCSS/styles.module.css'

const ProjectArtifacts = () => {
  return <div >
    <h1>Project Artifacts </h1> 
    <h2>Prototype Design</h2> 
      <Image
        src='/sd.github.io/project-t-pics/ERD.png'
        alt='ERD pic'
        width={150}
        height={200}
      />
    <h2>Final Presentation</h2> 
      <p>
        <a href="https://docs.google.com/presentation/d/1GYLood-k2MBgN4XAr0ZsffVnG-FZhX3AQwGh5KS39as/edit#slide=id.gd9c453428_0_16">First Presentation</a>
        <a href="https://docs.google.com/presentation/d/1PCAXZ6ytd8xfqXpC95_jV9_V3EZLn2LinT2YlrKz0X8/edit">Second Presentation</a>
      </p>
    <h2>Final Project Report</h2> 
    <h2>Posters</h2> 
    <h2>Videos</h2> 
  </div>
}

export default ProjectArtifacts
