import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'

const TeamMembers = () => {
  return (
    <div className={styles.container} style={{textAlign: `center`}}>
      <h2>Team Members</h2>
      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/sailor_jupiter_winking_by_noah65478_de019qv-pre.jpg'
          alt='random girl lol'
          width={200}
          height={150}
          priority
        />
        <br></br>
        <p>
          Miranda Medina
          <br></br>
          Computer Science major, addicted to coffee and learning new things!
        </p>
      </div>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/IMG_0196.JPG'
          alt='Jerry the guinea pig'
          width={150}
          height={150}
        />
        <br></br>
        <p>
          Lucas Troutman
          <br></br>
          Part-time instructional aide for local school. Hobby musician. With an interest in game-development.
        </p>
      </div>

      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/9128029.png'
          alt='not actually an accurate picture'
          width={150}
          height={275}
        />
        <br></br>
        <p>
          Gino Vitug
          <br></br>
          Computer Science major with an interest in UI/UX design. Enjoyer of
          music, memes, video games, and mechanical keyboards.</p>
      </div>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/beefa86f25c09019ca1784de1f63a708.jpg'
          alt='bird wearing reindeer antlers'
          width={200}
          height={150}
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

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/unknown.png'
          alt='rumi'
          width={150}
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
    </div>
  )
}

export default TeamMembers
