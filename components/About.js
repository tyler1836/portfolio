import React from 'react'
import styles from '../styles/All.module.css'

function About() {
  return (
    <div className={styles.aboutParent}>
      <h1>A little bit about me</h1>
      <p className={styles.about}>
      Full Stack Web3 developer with a background in 
      React, Node.js, Solidity, Go, and Javascript. Experience leading developer
      teams in design, creation, and execution of building web pages. Dedicated 
      to always learning and improving my knowledge. Innovative problem solver
      passionate about developing apps. 
      </p>
      <h1>Technical Skills</h1>
      <p>
      HTML, CSS, Modular CSS, SCSS, JavaScript, React, GraphQL, NextJS, MongoDB, Mongoose,
      Node, Python, Solidity, Go, and Express
      </p>
    </div>
  )
}

export default About