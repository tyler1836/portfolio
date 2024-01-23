import React from 'react'
import styles from '../styles/All.module.css'

function About() {
  return (
    <div className={styles.aboutParent}>
      <h1>A little bit about me</h1>
      <p className={styles.about}>
      Dedicated and innovative professional with two years of hands-on experience in blockchain technology, and Full Stack Web Development, specializing in Solidity contracts, Web  Development, and Go projects. Proficient in developing app chains for collateralized debt positions utilizing the Cosmos SDK. Adept at navigating the complexities of decentralized finance (DeFi) while contributing to the evolution of blockchain ecosystems. Demonstrated expertise in crafting and implementing solutions that merge technical prowess with practical business applications, driving efficiency and reliability within the rapidly evolving landscape of blockchain technology.
      </p>
      <h1>Technical Skills</h1>
      <p>
      HTML, CSS, Modular CSS, SCSS, JavaScript, React, GraphQL, NextJS, MongoDB, Mongoose,
      Node, Python, Solidity, Go, TypeScript, and Express
      </p>
    </div>
  )
}

export default About