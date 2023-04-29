import React from 'react'
import Image from 'next/image'
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
    <div className={styles.container} style={{textAlign: `center`}}>
      <br></br>
      <h1>Project Artifacts</h1>

      <hr></hr>

      <div>
      <br></br>
        <h2>Progress of Fall 2022</h2>
        <Image className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/5_Landmarks.png'
          alt='Picture of intercostal spaces'
          width={200}
          height={200}
        />

          <Image className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/ACL_Landmarks.png'
          alt='Picture of a simulated patient chest landmarks outlined'
          width={200}
          height={200}
        />
      </div>

      <div>
        <Image className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/Main_Menu.png'
          alt='Picture of "main menu" user interface'
          width={200}
          height={200}
        />
      <p>
      <Image className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/Website_Demo.png'
          alt='Picture of website interface'
          width={500}
          height={300}
        />
      </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div>
        <br></br>
        <h2>Final Presentation</h2>
        <u>
          <a href='https://docs.google.com/presentation/d/1BuEe8iQ_Ywgp9cOHZ5KoI-HhuYO0zJxLnIjdoz38bnM/edit?usp=sharing'>
          Senior Project Presentation (Fall 2022)
          </a>
        </u>
      </div>

      <div>
        <br></br>
        <h2>Final Project Report</h2>
        <u>
          <a href='https://docs.google.com/document/d/1qJDFJC3khcYYVn2EBiwrGAlK04vukSo7/edit?usp=sharing&ouid=100717398472660853610&rtpof=true&sd=true'>
          Senior Design Project Document (Fall 2022)
          </a>
        </u>
      </div>
      
      
    </div>
  ) 

}

export default ProjectArtifacts
