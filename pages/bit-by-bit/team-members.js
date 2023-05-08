import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'

const TeamMembers = () => {
  return (
    <div className={styles.container} style={{textAlign: `center`}}>
      <h2>Team Members</h2>

      <hr></hr>
      <br></br>

      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Miranda).png'
          alt='Portrait picture of Miranda Medina'
          width={175}
          height={200}
          priority
        />
        <br></br>
        <p>
          Miranda Medina
          <br></br>
          Computer Science major, addicted to coffee and learning new things!
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Lucas).png'
          alt='Portrait picture of Lucas Troutman'
          width={175}
          height={200}
        />
        <br></br>
        <p>
          Lucas Troutman
          <br></br>
          Part-time instructional aide for local school. Hobby musician. With an interest in game-development.
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Gino).png'
          alt='Portrait picture of Gino Vitug'
          width={175}
          height={200}
        />
        <br></br>
        <p>
          Gino Vitug
          <br></br>
          Computer Science major with an interest in UI/UX design. Enjoyer of
          music, memes, video games, and mechanical keyboards.</p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Kathleen).png'
          alt='Portrait picture of Kathleen Navarro'
          width={175}
          height={200}
        />
        <br></br>
        <p>
          Kathleen Navarro
          <br></br>
          Part-time computer science student, part-time web developer for a local
          company. I am sleepy always. I am mostly familiar with working on back
          end technologies, but wanting to learn more front end.
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/Screenshot 2023 (Murssal).png'
          alt='rumi'
          width={175}
          height={200}
          priority
        />
        <br></br>
        <p>
          Murssal Rahmati
          <br></br>
          Computer Science student with an interest in games, art, and cats.
        </p>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

    </div>
  )
}

export default TeamMembers
