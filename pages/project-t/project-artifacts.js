import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projectTCSS/styles.module.css'

const ProjectArtifacts = () => {
  return (
  <div className={styles.container}>
    <h1>Project Artifacts </h1> 
    <h2>Prototype Design</h2> 
      <Image
        src='/sd.github.io/project-t-pics/ERD.png'
        alt='ERD pic'
        width= {650}
        height={650}
        className={styles.header}
      />
      <p className={styles.container}> 
        The &#39;User&#39; entity contains the preliminary information that the user will specify such as age, sex, and the selected body part. The REST API then narrows down the probing analysis questions and symptoms based on the user&#39;s input provided from. This process repeats until enough information about the patient&#39;s issue is gathered. Then, analysis from the user&#39;s answers leads to the &#39;Results&#39; entity with further diagnosis information and resources towards care. 
      </p>
    <h2>Final Presentation</h2> 
      <p>
        <a href="https://docs.google.com/presentation/d/1GYLood-k2MBgN4XAr0ZsffVnG-FZhX3AQwGh5KS39as/edit#slide=id.gd9c453428_0_16" style={{color: `blue`}}>First Presentation</a>
      </p>
      <p>
        <a href="https://docs.google.com/presentation/d/1PCAXZ6ytd8xfqXpC95_jV9_V3EZLn2LinT2YlrKz0X8/edit" style={{color: `blue`}}>Second Presentation</a>
      </p>
    <h2>Final Project Report</h2> 
    <h2>Posters</h2> 
    <h2>Videos</h2> 
  </div>
  )
}

export default ProjectArtifacts
