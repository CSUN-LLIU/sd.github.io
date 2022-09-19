import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'
import PopUp from './PopUp'

const GROUP_LINKS = [
  { id: 1, name: 'Caffine Addicts', link: 'caffine-addicts' },
  { id: 2, name: 'Group 2', link: 'group-2' },
  { id: 3, name: 'Group 3', link: 'group-3' },
  { id: 4, name: 'Group 4', link: 'group-4' },
  { id: 5, name: 'Group 5', link: 'group-5' },
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
