import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'

const HomePage = () => {
  return (
    <div className={styles.container} style={{textAlign: `center`}} >
      <h1>Nursing Virtual Reality</h1> 
      <h3>Team Bit by Bit</h3>

      <hr></hr>
      <br></br>

      <p>
        <Image className={styles.header} style={{textAlign: `center`}}
          src='/sd.github.io/bit-by-bit-pics/ACL_1.png'
          alt='Picture of a simulated patient within Nursing VR'
          width={250}
          height={250}
        />

        <Image className={styles.header} style={{textAlign: `center`}}
          src='/sd.github.io/bit-by-bit-pics/ACL_2.png'
          alt='Picture of a simulated patient within Nursing VR'
          width={250}
          height={250}
        />
      </p>

      <br></br>
      <hr></hr>
      <br></br>

      <h2>Problem</h2>
      <div style={{textAlign: `justify`}} class={'indent'}>
        <p style={{textIndent: '5em'}}>
        There are nursing students who do not have effective patient subjects to practice
        their diagnosing techniques and their assessments on. The availability, wellness, consent, and diversity
        of a person are some factors to consider when looking for an ideal patient subject.
        There are health risks to consider when physically assessing others in such close proximity, especially when
        considering contagious viruses. For instructors teaching courses on nursing, test proctoring can be very
        time-consuming and strenuous for both the students and teachers. Giving effective feedback in a timely and efficient manner 
        to students can also be very difficult.
        </p>
      </div>


      <br></br>
      <hr></hr>
      <br></br>


      <h2>Project Idea</h2>
      <div style={{textAlign: `justify`}}>  
        <p style={{textIndent: '5em'}}>
        Nursing VR will provide nursing students a safe and effective way to 
        practice their diagnosing skills within a virtual environment. 
        The product allows students to practice medical examinations
        (provided by CSUN Nursing Department) 
        which have been implemented into the program. 
        The user will be able to interact within a 3D virtual space along 
        with a simulated patient, medical tools, and other assets that nursing 
        students would have access to in a real-life medical room setting.
        Ideally, it would also provide an immersive experience that a nursing student 
        would have when practicing on a live patient. Our project is intended to 
        run on the Oculus/Meta Quest 2.
        </p>
        <p style={{textIndent: '5em'}}>
        We will add new features to the existing project, using resources and feedback provided by the
        CSUN Nursing Department. New features: an Instructor/Administrator Web Interface for
        customizing the simulated patient and the Cardiovascular System Assessment Exam.
        For project development, we will be working tools, languages, and assets such as: Unity, C#, Maya,
        3D models, animations, React, audio (MP3) files, AWS, MySQL Workbench, Visual Studio Code, Github, and Jira.
        The program runs using a Virtual Reality device (tested to be compatible with a Meta/Oculus Quest 2).
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <p>See our team project website which supports our program:
        <br></br>
        <h3>
        <u>
          <a href='https://main.d36l2ljv1p175f.amplifyapp.com/'>
           https://main.d36l2ljv1p175f.amplifyapp.com/
          </a>
        </u>
        </h3>
        
      </p>



    </div>
  )
}

export default HomePage
