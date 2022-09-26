import React from 'react'
import Image from 'next/image'
import styles from '../../styles/bit-by-bit/styles.module.css'

const TeamMembers = () => {
  return (
    <div className={styles.container}>
      <h2>Team Members</h2>
      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/sailor_jupiter_winking_by_noah65478_de019qv-pre.jpg'
          alt='random girl lol'
          width={200}
          height={150}
          priority
        />
        <li>Miranda Medina</li>
        Computer Science major, addicted to coffee and learning new things!
      </div>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/IMG_0196.JPG'
          alt='Jerry the guinea pig'
          width={150}
          height={150}
        />
        <li>Lucas Troutman</li>
        Part-time Instructional Aide for a local school, hobby musician, with an
        interest in game-development.
      </div>

      <div>
        <Image
          src='/sd.github.io/bit-by-bit-pics/9128029.png'
          alt='not actually an accurate picture'
          width={150}
          height={275}
        />
        <li>Gino Vitug</li>
        Computer Science major with an interest in UI/UX design. Enjoyer of
        music, memes, video games, and mechanical keyboards.
      </div>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/beefa86f25c09019ca1784de1f63a708.jpg'
          alt='bird wearing reindeer antlers'
          width={200}
          height={150}
        />
        <li>Kathleen Navarro</li>
        Part-time computer science student, part-time web developer for a local
        company. I am sleepy always. I am mostly familiar with working on back
        end technologies, but wanting to learn more front end.
      </div>

      <div className={styles.img_gap}>
        <Image
          src='/sd.github.io/bit-by-bit-pics/unknown.png'
          alt='rumi'
          width={150}
          height={200}
          priority
        />
        <li>Murssal Rahmati</li>
        Computer Science student with an interest in games, art, and cats.
      </div>
    </div>
  )
}

export default TeamMembers
