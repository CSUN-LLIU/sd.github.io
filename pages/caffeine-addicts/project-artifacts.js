import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/caffeineAddicts/Artifacts.module.css'

const Member = ({ person }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h1>{person.name}</h1>
    </div>
    <div className={styles.info}>{person.info}</div>
  </div>
)

const ProjectArtifacts = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Prototype Design</h1>
        <div className={styles.proImage}>
          <Image
            src={'/sd.github.io/caffeinePics/pro1.jpg'}
            alt='log in'
            width={400}
            height={250}
            style={{ marginRight: '5px' }}
          />
          <Image
            src={'/sd.github.io/caffeinePics/pro2.jpg'}
            alt='log in'
            width={400}
            height={250}
            style={{ marginRight: '5px' }}
          />
          <Image
            src={'/sd.github.io/caffeinePics/pro3.jpg'}
            alt='log in'
            width={400}
            height={250}
          />
        </div>
      </div>
      <br />
      <div>
        <h1>Documentation</h1>
        <p>
          Our Documentation can be found
          <Link href='https://docs.google.com/document/d/13zoil7d_qRc-YcZQkRKtAbop4KF1rLUH/edit?usp=sharing&ouid=116344832901225169899&rtpof=true&sd=true'>
            <strong style={{ cursor: 'pointer' }}> here</strong>
          </Link>
        </p>
      </div>
      <br />
      <div>
        <h1>Final Presentation</h1>
        <p>
          Our Final Presentation can be found
          <Link href='https://docs.google.com/presentation/d/106iUJXpiPokc_-TT_D1JlzxalUhJfY3u8f9rTvRZibQ/edit?usp=sharing'>
            <strong style={{ cursor: 'pointer' }}> here</strong>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ProjectArtifacts
