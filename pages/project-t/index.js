import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>
      <h1>Problem: </h1>
      <p>
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
      </ul>
      <h1>Project Idea: </h1>
      <p>
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
      </p>
      <h1>Summary of Requirements: </h1> 
      <li> Interactive 3D Model -  Human Anatomical Model</li>
      <li> Patient Assessment - Medical Probing Questions and Symptom Options</li>
      <li> Diagnosis Info</li>
      <li> Guided Center and Further Steps/Recommendations</li>
      <li> Patient Report</li>
      <Image
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
