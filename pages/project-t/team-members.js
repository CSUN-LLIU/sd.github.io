import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projectTCSS/styles.module.css'

const TeamMembers = () => {
  return (<div >
    <h1>Team Members:</h1> 

    <div className={styles.container}>
    
        <span className={styles.image}>
          <Image 
            src="/sd.github.io/charles.png"
            alt="charles pic"
            width={150}
            height={200}
          />
        </span>
        <p className={styles.paragraph}>Charles Cabugnason: Experience with java, js, HTML, CSS. Interest in Front-End and Music Software development. My hobbies are playing videogames, music, and snowboarding.</p>

      
    </div>

    <div className={styles.container}>
    
        <span className={styles.image}>
          <Image 
            src="/sd.github.io/sari.jpg"
            alt="sari pic"
            width={150}
            height={200}
          />
        </span>
        <p className={styles.paragraph}>Sari Ajina: Experience in Java, JS, Swift, HTML, CSS. Interested in Full-Stack Engineering and want to gain knowledge in Python Machine Learning. My hobbies are playing video games, more specifically FPS and Story games. I also love watching Futbol, UFC, and Formula 1.</p>

      
    </div>

    <div className={styles.container}>
    
        <span className={styles.image}>
          <Image 
            src="/sd.github.io/matt.jpg"
            alt="sari pic"
            width={150}
            height={200}
          />
        </span>
        <p className={styles.paragraph}>Matt Duong: I currently have some experience in Java, JavaScript, CSS, HTML, and MongoDB Database. I am currently interested in learning more Python and LabView at my internship at JPL. I love to play drums and cosplay anime characters in my free time :^D </p>
      
    </div>

    <div className={styles.container}>
    
        <span className={styles.image}>
          <Image 
            src="/sd.github.io/marc.png"
            alt="sari pic"
            width={150}
            height={200}
          />
        </span>
        <p className={styles.paragraph}>Marc Talladen: I have some experience with Java, HTML, and JavaScript. My interests career-wise are Front-End Web Development, UX Design, and Game Development. My hobbies consist of playing video games, watching shows, and sometimes playing musical instruments.</p>
      
    </div>

    <div className={styles.container}>
    
        <span className={styles.image}>
          <Image 
            src="/sd.github.io/brent.jpg"
            alt="sari pic"
            width={150}
            height={200}
          />
        </span>
        <p className={styles.paragraph}> Brent Ilejay: As a full-time student studying comptuer science, I love being creative in regards to music, fashion, and design. I am always active whether it is skateboarding, working out, surfing, etc. Experience in C++, Java, Python, and Swift (App Development). I would like to get more into website/app development and potentially music software development. </p>
      
    </div>

    <div className={styles.container}>
    
        <span className={styles.image}>
          <Image 
            src="/sd.github.io/ando.jpg"
            alt="sari pic"
            width={150}
            height={200}
          />
        </span>
        <p className={styles.paragraph}>My name is Antranic Honanian and i am a computer science major interested in becoming a game developer. I have experience with C#  Unity, html, css, js and a bit of C++/C. A couple of hobbies that I have is playing the piano, lifting weights, and cooking.</p>
      
    </div>  

  </div>)
}

export default TeamMembers
