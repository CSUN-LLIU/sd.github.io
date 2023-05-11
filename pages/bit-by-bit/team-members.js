import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'

const TeamMembers = () => {
  return (
    <div className={styles.container} style={{textAlign: `center`}}>
      <h1>Team Members</h1>

      <hr></hr>
      <br></br>

      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Miranda).png'
          alt='Portrait picture of Miranda Medina'
          width={250}
          height={285}
          priority
        />
        <br></br>
        <p>
          <h3>Miranda Medina</h3>
          Computer Science major, addicted to coffee and learning new things!
        </p>
        <p>
          <a style={{ display: 'block'}}
            href="mailto:miranda.medina.978@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            >
              <u>miranda.medina.978@my.csun.edu</u>
          </a>
        </p>
        <p>
          <a style={{ display: 'block'}}
              href="https://www.linkedin.com/in/mirandamedina978/">
                <u>https://www.linkedin.com/in/mirandamedina978/</u></a>
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Lucas).png'
          alt='Portrait picture of Lucas Troutman'
          width={250}
          height={285}
        />
        <br></br>
        <p>
          <h3>Lucas Troutman</h3>
          Part-time instructional aide for local school. Hobby musician. With an interest in game-development.
        </p>
        <p>
          <a style={{ display: 'block'}}
            href="mailto:lucas.troutman.805@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            >
              <u>lucas.troutman.805@my.csun.edu</u>
          </a>
        </p>
        <p>
          <a style={{ display: 'block'}}
              href="https://www.linkedin.com/in/lucas-troutman-a645b7152/">
                <u>https://www.linkedin.com/in/lucas-troutman-a645b7152/</u></a>
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Gino).png'
          alt='Portrait picture of Gino Vitug'
          width={250}
          height={285}
        />
        <br></br>
        <p>
          <h3>Gino Vitug</h3>
          Computer Science major with an interest in UI/UX design. Enjoyer of
          music, memes, video games, and mechanical keyboards.</p>
        <p>
          <a style={{ display: 'block'}}
            href="mailto:gino.vitug.172@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            >
              <u>gino.vitug.172@my.csun.edu</u>
          </a>
        </p>
        <p>
          <a style={{ display: 'block'}}
              href="https://www.linkedin.com/in/gino-vitug-07b7561b3/">
                <u>https://www.linkedin.com/in/gino-vitug-07b7561b3/</u></a>
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Kathleen).png'
          alt='Portrait picture of Kathleen Navarro'
          width={250}
          height={285}
        />
        <br></br>
        <p>
          <h3>Kathleen Navarro</h3>
          Part-time computer science student, part-time web developer for a local
          company. I am sleepy always. I am mostly familiar with working on back
          end technologies, but wanting to learn more front end.
        </p>
        <p>
          <a style={{ display: 'block'}}
            href="mailto:kathleen.navarro.220@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            >
              <u>kathleen.navarro.220@my.csun.edu</u>
          </a>
        </p>
        <p>
          <a style={{ display: 'block'}}
              href="https://www.linkedin.com/in/klnavarro/">
                <u>https://www.linkedin.com/in/klnavarro/</u></a>
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Murssal).png'
          alt='Portrait picture of Murssal Rahmati'
          width={250}
          height={285}
          priority
        />
        <br></br>
        <p>
          <h3>Murssal Rahmati</h3>
          Computer Science student with an interest in games, art, and cats.
        </p>
        <p>
          <a style={{ display: 'block'}}
            href="mailto:murssal.rahmati.739@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            >
              <u>murssal.rahmati.739@my.csun.edu</u>
          </a>
        </p>
        <p>
          <a style={{ display: 'block'}}
              href="https://www.linkedin.com/in/murssal-rahmati/">
                <u>https://www.linkedin.com/in/murssal-rahmati/</u></a>
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

    </div>
  )
}

export default TeamMembers
