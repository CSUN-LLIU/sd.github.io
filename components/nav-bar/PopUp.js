import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'

const POP_LINKS = [
  { id: 1, name: 'Homepage', link: '' },
  { id: 2, name: 'Team Members', link: 'team-members' },
  { id: 3, name: 'Project Artifacts', link: 'project-artifacts' },
]

const PopUp = ({ primaryLink }) => {
  return (
    <div className={styles.popUp}>
      {POP_LINKS.map((each) => (
        <Link key={each.id} href={`/${primaryLink}/${each.link}`}>
          <div className={styles.popUpAnchor}>{each.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default PopUp
