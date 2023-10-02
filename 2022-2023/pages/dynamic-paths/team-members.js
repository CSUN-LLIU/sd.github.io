import React from 'react'
import Image from 'next/image'
import styles from '../../styles/caffeineAddicts/Members.module.css'

const TEAM_MEMBERS = [
  {
    name: 'Jonathan Navarro',
    info: `Interests include full stack web development and cyber security. Makes games as a
    hobby using the Unity game engine.`,
    photo: '/sd.github.io/caffeinePics/navaro.jpg',
  },
  {
    name: 'Nestor Colindres',
    info: `Hey all! I hope you enjoy taking a look at our project! If I am not
    programming, you will see me either play guitar, gaming, or skydiving!`,
    photo: '/sd.github.io/caffeinePics/nes.jpg',
  },
  {
    name: 'Juan Espinoza',
    info: `Hey everyone! I hope you will find interest while reading what we have
    in store for our project! When you see me, you might think I should
    really be at home resting because of the bags in my eyes, but I am
    good to go!!!`,
    photo: '/sd.github.io/caffeinePics/juan.jpg',
  },
  {
    name: 'Olaf Sanburg',
    info: `Hello! I have a passion for programming and learning new things. I am
    excited to work on this project to improve the accessability of
    academic advisement for other students at CSUN.`,
    photo: '/sd.github.io/caffeinePics/osanburg.png',
  },
  {
    name: 'Garabed Demirjian',
    info: `Hello!I have been doing web development for a couple of years now. I
    am a full stack developer, meaning I have worked front end and back
    end. For front end I have used React, and Next js. I also know React
    Native for mobile app development. For backend I have used Node
    js-express- and for Data base I have used Mongo DB, and mysql. I am a
    computer science tutor at a community college, I tutor mainly in data
    structure and advanced data structure classes.`,
    photo: '/sd.github.io/caffeinePics/garo.jpg',
  },
]

const Member = ({ person }) => (
  <div className={styles.container}>
    <div className={styles.name}>
      <h1>{person.name}</h1>
      <Image
        src={person.photo}
        width={150}
        height={200}
        alt='Nes'
        className={styles.image}
      />
    </div>
    <div className={styles.info}>{person.info}</div>
  </div>
)

const TeamMembers = () => {
  return (
    <div>
      {TEAM_MEMBERS.map((person, index) => (
        <Member key={index} person={person} />
      ))}
    </div>
  )
}

export default TeamMembers
