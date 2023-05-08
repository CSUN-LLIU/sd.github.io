import React from 'react'
import styles from '../../styles/caffeineAddicts/Members.module.css'

const PARAGRAPHS = [
  {
    id: 1,
    title: `General Problem Statement`,
    info: `For faculty advisors and CSUN Computer Science students who need quick advisement. 
    The DynamicPath (Name subject to change) is a SAAS product
    that automates the majority of advisement for students and faculty members. This eliminates user errors and it helps create an easy roadmap unlike third party planners that can introduce errors. We offer suggestions for different paths and create modular visualizations of students' overall academic classes.
    `,
  },
  {
    id: 2,
    title: `General Solution Approach`,
    info: `We will be creating a website that current CSUN freshman's will have access to. 
    This tool will help students visualize their degree road map with all GE's included. 
    This will improve students' understanding of their degree pathway. We provide warnings if they are missing requirements or prerequisites.
     We are passionate about students feeling confident in the classes they are taking that will progress them in their degree. This project will help students save money and effort and ensure they feel confident in finishing their degree.
    We hope to help students achieve their goals in the most efficient way possible and have confidence in their academic future. The output of this project will be to create a tool to streamline and automate advisement for CSUN students and Faculty.`,
  },
  {
    id: 3,
    title: `What is your project idea and how will it work (what are its components etc.)`,
    info: `We believe there is a big opportunity to alleviate advisor's time by
    automating the majority of questions being asked to them. We will be
    creating a product that can dynamically create a road map depending on
    the student's needs and preferences (Full time student/preferred
    discipline, etc). This will give the student exactly what classes they
    need to take and in what order (Some classes have prerequisites). This
    will also help with negating user errors and help navigate them
    through their academic career and ensuring they only take the classes
    they need. With the support and guidance of multiple faculty members,
    this can revolutionize academic advisement and give students and
    advisors a product they can have confidence in.`,
  },
]

const Member = ({ person }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h1>{person.title}</h1>
    </div>
    <div className={styles.info}>{person.info}</div>
  </div>
)

const HomePage = () => {
  return (
    <div>
      {PARAGRAPHS.map((each) => (
        <Member key={each.id} person={each} />
      ))}
    </div>
  )
}

export default HomePage
