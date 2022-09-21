import React from 'react'

const HomePage = () => {
  /*
  1. A homepage
  This page includes a Project Synopsis which introduces your project. Answer the following questions in separate paragraphs:

  (1) What is the problem being addressed?

  (2) What is your project idea and how will it work (what are its components etc.)

  Use pictures/images to make the page interesting.
  */
  return <div>
    
    <h1>Project: </h1> VR Clinic 

    <div>
      <h2>Problem:</h2>
        <p>
        Ever since the pandemic hit in 2020, training for real life situations has been difficult and sometimes dangerous. 
        This is true for a number of professions, but nursing deals with close contact between the patient and nurse, 
        which can lead to possible transmission of disease.
        <br></br><br></br>
          Most student nurses practice examinations on other students. However, most students don’t exhibit signs of illness or stress,
        and so students don’t get to learn a wide range of symptoms like they should.
        <br></br><br></br>
          We are going to solve both of these issues by allowing nurses to train and practice through the use of VR. 
        These simulations will keep students safe by giving them the experience of learning what symptoms are linked to what illnesses,
        without the risk of catching those illnesses.
        </p>
    </div>

    <div>
      <h2>Project idea:</h2>
        <p> We are going to continue the Computer Science and Nursing Project from last year. Continuing to add 
        features to the "check up" simulation, we will need to work with Unity, C#, and also add in 3D modeling and sound effects.
        The project will be accessible via a VR headset (tested on a Quest 2).
        </p>
    </div>
    
  </div>

  
}

export default HomePage
