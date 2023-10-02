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
    <div className={styles.container} style={{ textAlign: `center` }}>
      <h1>Project Artifacts</h1>

      <hr></hr>
      <br></br>

      <h2>
        <u>Progress of Spring 2023</u>
      </h2>
      <div>
        <br></br>
        <h3>2023 Nursing Virtual Reality Senior Design Poster</h3>
        <Image
          src={'https:i.imgur.com/8bJY5e4.png'}
          width='100%'
          height='100%'
          alt='Nursing Virtual Reality Senior Design Poster'
        />
      </div>

      <div>
        <br></br>
        <br></br>
        <h3>Nursing Research Day Presentation</h3>
        <Image
          src={'https://i.imgur.com/ZXLWeF3.png'}
          width='100%'
          height='100%'
          alt='First slide of Nursing Research Day Slides'
        />
        <a href='https://www.canva.com/design/DAFfxWfu-5o/giteZxVUXyHO8iZ87kooGA/view?utm_content=DAFfxWfu-5o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'>
          <u>Link to Canva Presentation Slides (Spring 2023)</u>
        </a>
      </div>

      <div>
        <br></br>
        <br></br>
        <h4>User perspective of animations menu UI in NVR program</h4>
        <p>
          <Image
            src={'https://i.imgur.com/C9i1pBG.png'}
            width='60%'
            height='60%'
            alt='User perspective of animations menu UI in NVR program'
          />
        </p>
      </div>

      <div>
        <br></br>
        <br></br>
        <h4>User perspective of virtual patient laying down in NVR program</h4>
        <p>
          <Image
            src={'https://i.imgur.com/ljG0nLD.png'}
            width='60%'
            height='60%'
            alt='User perspective of virtual patient laying down in NVR program'
          />
        </p>
      </div>

      <div>
        <br></br>
        <br></br>
        Maya editor perspective of patient model
        <p>
          <Image
            src={'https://i.imgur.com/GGaZf2n.png'}
            width='80%'
            height='80%'
            alt='Maya editor perspective of patient model'
          />
        </p>
      </div>

      <div>
        <br></br>
        <br></br>
        <h4>A page from website interface of patient customization feature</h4>
        <p>
          <Image
            src={'https://i.imgur.com/zg4HtuR.png'}
            width='100%'
            height='100%'
            alt='Website interface of patient customization feature'
          />
        </p>
        <a href='https://main.d36l2ljv1p175f.amplifyapp.com/'>
          <u>Project Website: https://main.d36l2ljv1p175f.amplifyapp.com/</u>
        </a>
      </div>

      <br></br>

      <br></br>
      <hr></hr>
      <br></br>

      <u>
        <h2>Progress of Fall 2022</h2>
      </u>
      <div>
        <br></br>
        <h4>First implementation of chest landmarks</h4>
        <Image
          className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/5_Landmarks.png'
          alt='Picture of intercostal spaces'
          width={300}
          height={300}
        />

        <Image
          className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/ACL_Landmarks.png'
          alt='Picture of a simulated patient chest landmarks outlined'
          width={300}
          height={300}
        />
      </div>

      <div>
        <br></br>
        <h4>Showcase of Main Menu user interface</h4>
        <Image
          className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/Main_Menu.png'
          alt='Picture of "main menu" user interface'
          width={400}
          height={300}
        />

        <br></br>
        <h4>
          Draft page of website interface for patient customization feature
        </h4>
        <Image
          className={styles.header}
          src='/sd.github.io/bit-by-bit-pics/Website_Demo.png'
          alt='Picture of draft website interface'
          width={800}
          height={400}
        />
      </div>

      <br></br>

      <div>
        <h3>2022 Final Presentation</h3>
        <u>
          <a href='https://docs.google.com/presentation/d/1BuEe8iQ_Ywgp9cOHZ5KoI-HhuYO0zJxLnIjdoz38bnM/edit?usp=sharing'>
            Senior Project Presentation (Fall 2022)
          </a>
        </u>
      </div>

      <div>
        <br></br>
        <h3>2022 Final Project Report</h3>
        <u>
          <a href='https://docs.google.com/document/d/1qJDFJC3khcYYVn2EBiwrGAlK04vukSo7/edit?usp=sharing&ouid=100717398472660853610&rtpof=true&sd=true'>
            Senior Design Project Document (Fall 2022)
          </a>
        </u>
      </div>

      <br></br>
      <hr></hr>
    </div>
  )
}

export default ProjectArtifacts
