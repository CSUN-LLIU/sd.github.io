import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const TeamMembers = () => {
  return (
    <div>
      <center><h1>Team Gryffindor</h1></center>


      <div className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col'>
        <div className='card h-100'>
          <center>
              <Image
                src='/sd.github.io/gryffindorpics/cinnamoroll.jpg'
                height='200px'
                width='150px'
                border='5px'
                className='mb-3'
                alt=''
              />
              <h5 className='card-title'>Jazlyn Fernandez</h5>
            </center>
            <p className='card-text'>
              Hello I am Jazlyn, a Senior at CSUN, hoping to graduate in Spring
              2023. I have experience in mostly Java and some experience with C,
              C++. My interest in computer science is game developing and GUI
              design. But I am always open to learn more and improve my skills
              for this field.
            </p>
          </div>
        </div>

        <div className='col'>
          <div className='card h-100'>
            <center>
              <Image
                src='/sd.github.io/gryffindorpics/Angelina.jpg'
                height='200px'
                width='150px'
                border='5px'
                className='mb-3'
                alt='Angelina'
              />
              <h5 className='card-title'>Angelina Nantanapramoth</h5>
            </center>
            <p className='card-text'>
              {`      I have experience with GUI, Unity, Java, C#, C, and R. My interest CS is in regards to the development of communication and also game development. 
      Nevertheless, I am not adverse to trying new things and gaining new skills.`}
            </p>
          </div>
        </div>

        <div className='col'>
          <div className='card h-100'>
            <center>
              <Image
                src='/sd.github.io/gryffindorpics/Kathy.jpg'
                height='200px'
                width='150px'
                border='2px'
                className='mb-3'
                alt='Kathy'
              />
              <h5 className='card-title'>Kathareeya Atthajaroon</h5>
            </center>
            <p className='card-text'>
              {`Greetings! I am Kathy, it is nice to meet everyone of you.
       I have experienced with UI/UX designs, Java/script, C,C++, NODE JS, basics of python, and MYSQL database.
       My current interest in the fields of computer science is data science, and hoping to improve my Python skills.
       I am willing to learn more skills through new projects that I'm working on.`}
            </p>
          </div>
        </div>

        <div className='col'>
          <div className='card h-100'>
          <center>
              <Image
                src='/sd.github.io/gryffindorpics/keroppi.jpg'
                height='200px'
                width='150px'
                border='5px'
                className='mb-3'
                alt='Keropi'
              />
              <h5 className='card-title'>Daniel Esquivel</h5>
            </center>
            <p className='card-text'>
              {`Outside of className I enjoy hanging out with friends and learning new skills like drawing. 
        I have experience using Java, C, and Swift, but I am always willing to learn new languages like Python or C++.`}
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='card h-100'>
            <center>
              <Image
                src='/sd.github.io/gryffindorpics/JP.jpg'
                height='200px'
                width='150px'
                border='5px'
                className='mb-3'
                alt='JP'
              />
              <h5 className='card-title'>Juan Vazquez</h5>
            </center>
            <p className='card-text'>
              {`I have experience with Java, C++, C. I'm interested in specializing in graphics programming. 
              As for hobbies, I enjoy playing video games and playing guitar.`}
            </p>
          </div>
        </div>
        <div className='col'>
          <div className='card h-100'>
            <center>
              <Image
                src='/sd.github.io/gryffindorpics/Erick.jpg'
                height='200px'
                width='150px'
                border='5px'
                className='mb-3'
                alt='Erick'
              />
              <h5 className='card-title'>Erick Bravo</h5>
            </center>
            <p className='card-text'>
              {`Hallo! As Im intrested in computer vision and embedded aplications related to aerospace, 
              Ive started to delve and gain experiance in C/C++, Python, Golang and Javascript. 
              Some of my hobbies include outdoor photography, swimming and reading novels.  `}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
