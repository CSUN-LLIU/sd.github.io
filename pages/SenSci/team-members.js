import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const Card = (props) => (
  <div className='col'>
    <div className='card bg-light'>
      <div className='card-body text-center'>
        <Image
          src={props.member.pic}
          width={150}
          height={200}
          className='mb-3'
          alt=''
        />
        <h3 className='card-title mb-3'>{props.member.name}</h3>
        <p className='card-text'>{props.member.bio}</p>
      </div>
    </div>
  </div>
)

const TeamMembers = () => {
  return (
    <>
      <div className='row g-4'>
        {(() => members.map((i, index) => <Card key={index} member={i} />))()}
      </div>
    </>
  )
}

var members = [
  {
    name: 'Lemond Wyatt',
    bio: `Senior in Computer Science. Fullstack developer using React,
		Node.js, Express, and more. Also have done game development with
		Unity Engine.`,
    pic: `/sd.github.io/SenSci/Lemond.jpg`,
  },
  {
    name: 'Mahima Mishor',
    bio: `Senior in Computer Science. Interests include game development,
		and web/app development. I would really like to work more with
		Swift and use it to develop an app. Specializations include Java
		programming language and HTML.`,
    pic: `/sd.github.io/SenSci/May.jpg`,
  },
  {
    name: 'Lyana Curry',
    bio: `Senior in Computer Science. Interested in Front-End Web & Mobile
		Development Experience largely in Java, C++, HTML, CSS, and a
		little experience with Python & JS`,
    pic: `/sd.github.io/SenSci/LyanaCurry.png`,
  },
  {
    name: 'Isaias Ramirez',
    bio: `Senior in computer science. Interested in front-end web and
		mobile devlopment. I have been developing in Java, C, HTML, CSS,
		Javascript and mips. I am looking into venturing into full stack
		development`,
    pic: `/sd.github.io/SenSci/Isaias.JPG`,
  },
  {
    name: 'Shashi Wong',
    bio: `I am currently a Senior majoring in Computer Science. I have experience coding in C++, and JAVA. 
    I am very interested in game design, cyber security, 
    and would love to work more with html and unity!`,
    pic: `/sd.github.io/SenSci/Shashi.png`,
  },
]

export default TeamMembers
