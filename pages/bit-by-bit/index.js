import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'
const HomePage = () => {
  /*
  1. A homepage
  This page includes a Project Synopsis which introduces your project. Answer the following questions in separate paragraphs:

  (1) What is the problem being addressed?

  (2) What is your project idea and how will it work (what are its components etc.)

  Use pictures/images to make the page interesting.
  */
  return (
    <div className={styles.container} style={{textAlign: `center`}}>
      <h1>Nursing VR</h1> 
      <p>
        <Image className={styles.header} style={{textAlign: `center`}}
          src='/sd.github.io/bit-by-bit-pics/unknown2.png'
          alt='Picture of a simulated patient within Nursing VR'
          width={200}
          height={200}
        />
      </p>

      <h2>Problem</h2>
      <div style={{textAlign: `justify`}}>
        <p>
          Ever since the pandemic hit in 2020, training for real life situations
          has been made especially difficult and has made it more apparent
          the possible health risks of dealing with those with contagious diseases.
          This is true for a number of professions but within the medical field,
          nurses often must be in close contact with their patients for varying lengths of time
          and both of these factors put their health at risk.
        </p>
        <p>
        Nursing students may not have effective patient subjects to practice their diagnosing techniques and examinations on.
        The availability, wellness, and consent of a person are some factors to consider when looking for an ideal patient subject.
        There is a need for nursing students to practice on different areas of the body,
        like examining the respiratory, cardiovascular, and abdominal systems.
        </p>

        <p>
        Assuming their test patients are healthy, Student nurses that practice examining other nursing students
        do not have the opportunity to practice diagnosing for different types of illnesses or abnormalities that they
        are taught in their courses or may see in their field. Because healthy/ordinary patients do not exhibit signs 
        of illness or any abnormalities, the practicing
        nurses do not get the opportunity to learn or apply what they've learned from a wide range of symptoms.
        </p>

        <p>
        For instructors teaching courses on nursing, test proctoring and giving feedback to students can be very time-consuming
        and strenuous for both the students and teachers. For example, having to observe head-to-toe assessments for each 
        individual students can take hours at a time.
        </p>
        <p>
        We are going to solve these issues by allowing nurses to train
        and practice through the use of VR. These simulations will keep
        students safe by giving them the experience of learning what symptoms
        are linked to what illnesses, without the risk of exposing themselves to
        those illnesses.
        </p>
        <p>
        Because the user will operate in a virtual environment, the product would eliminate any risks and discomfort 
        that would come with practicing on real people and has the potential to make the training process 
        more efficient and less time-consuming. Our product would do away with the current practicing methods conducted at CSUN 
        of having to diagnose and examine a real-life person such as a classmate or any person for that matter, familiar or unfamiliar.
        </p>
        <p>
        Nursing VR may be a useful tool for instructors that teach these nursing courses. The features of this software would help to make student testing and giving student feedback less time-consuming and less strenuous for the instructors.
        The features of Nursing VR would allow the instructor to customize the simulated patient, with different symptoms and/or abnormalities. Instructors could have more control over what their students can practice diagnosing for and allow for much more freedom which wouldn’t be possible with real-life patients.
        Because the user will operate in a virtual environment, the product would eliminate any risks and discomfort that would come with practicing on real people and  has the potential to make the training process more efficient and less time-consuming.
        Our product would do away with the current practicing methods conducted at CSUN of having to diagnose and examine a real-life person such as a classmate or really any person, familiar or unfamiliar.
        </p>
      </div>

      <h2>Project Idea</h2>
      <div style={{textAlign: `justify`}}>  
        <p>
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
        <p>
        We will add new features to the existing project, using resources and feedback provided by the
        CSUN Nursing Department. New features: an Instructor/Administrator Web Interface for
        customizing the simulated patient and the Cardiovascular System Assessment Exam.
        For development, we will be applying and using Unity, C#, 3D modeling, and animation.
        The program runs using a VR device (tested to be compatible with a Meta/Oculus Quest 2).
        </p>
      </div>
    </div>
  )
}

export default HomePage
