import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header} style={{textAlign: `center`}}>Problem</h1>
      <p>
         Patients are not able to quickly have an idea of their health issues in a timely manner. 
         This is a problem because time and money is wasted from visiting a hospital to utilizing their resources such as nurses, tools, 
         and physical space to provide for patients with higher urgency.
         Low income patients also do not have easily accessible funds to pay for costly diagnoses. 
         In addition, patients have a higher risk of infections and diseases visiting hospitals.
      </p> 
      {/* <p>
        Wasted resources including time, money, and resources spent for patients
        to get a triage for their issue.
      </p>
      <ul>
        Time: it will help cut time by allowing you to obtain a diagnosis from
        the comfort of your home.
      </ul>
      <ul>
        Money: there are many people in this world that do not have access to
        universal healthcare, so being able to obtain a diagnosis for free will
        help many with financial issues.{' '}
      </ul>
      <ul>
        Resources: the ability to save resources for hospitals and healthcare
        locations is also big, this will allow space for bigger emergencies at
        those facilities rather than a typical visit.
      </ul> */}
      <h1 className={styles.header} style={{textAlign: `center`}}>Project Idea </h1>
      <p>
        The team will develop a medical diagnosis website that allows the user to interact with a 3D anatomical model, answer respective medical probing questions, 
        and select symptoms in order to receive a clear and informative diagnosis with further recommendations.
      </p>
      {/* <p>
        A website to triage a patient in order to save time and money spent to
        get direction on the best next step.
      </p>
      <p>
        The goal is to allow the client to have a more interactive experience to
        obtain a diagnosis of their issues.
      </p>
      <p>
        In addition, it will provide an insightful experience to the human body
        by being able to observe a detailed 3d model.
      </p> */}
      <h1 className={styles.header} style={{textAlign: `center`}}>Summary of Requirements </h1> 
      <li> Interactive 3D Model -  Human Anatomical Model</li>
      <li> Patient Assessment - Medical Probing Questions and Symptom Options</li>
      <li> Diagnosis Info</li>
      <li> Guided Center and Further Steps/Recommendations</li>
      <li> Patient Report</li>
      <Image
        style={{boxShadow: `-1px -1px 20px`}}
        src='/sd.github.io/project-t-pics/male.png'
        alt='male body'
        width={250}
        height={300}
      />
      <Image
        src='/sd.github.io/project-t-pics/female.png'
        alt='male body'
        width={250}
        height={300}
      />
    </div>
  )
}

export default HomePage
