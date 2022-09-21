import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'
import PopUp from './PopUp'

const GROUP_LINKS = [
  { id: 1, name: 'Caffeine Addicts', link: 'caffeine-addicts' },
  { id: 2, name: 'Project T', link: 'project-t' },
  { id: 3, name: 'Gryffindor', link: 'gryffindor' },
  { id: 4, name: 'Bit by Bit', link: 'bit-by-bit' },
  { id: 5, name: 'SenSci', link: 'SenSci' },
]

const NavBar = ({ children }) => {
  const navHeight = useRef()
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(navHeight.current.clientHeight)
  }, [])
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container} ref={navHeight}>
        <div className={styles.display}>
          {GROUP_LINKS.map((each) => (
            <div
              key={each.id}
              style={{ display: 'flex', alignItems: 'center' }}>
              <Link href={`/${each.link}`}>
                <div className={styles.anchor}>{each.name}</div>
              </Link>
              <PopUp primaryLink={each.link} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: height }}>{children}</div>
    </div>
  )
}

export default NavBar
