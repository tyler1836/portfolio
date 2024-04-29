import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/All.module.css'

import ashland from '../nftvercel.png'
import plan3 from '../plan3site.png'
import social from '../Images/4.png'
import dao from '../Images/3.png'
import token from '../Images/2.png'
import appchain from '../Images/1.png'
import blkswan from '../Images/blkswan.png'

function Projects() {
  return (
    <div className={styles.projects}>
      {/* <Image src={ashland} height={400} width={800}></Image> */}
      <h4>Plan 3 Site</h4>
      <Link href="https://plan3alphasite.vercel.app/"><Image src={plan3} height={400} width={1200}></Image></Link>
      <h4>Black Swan Research</h4>
      <Link href="https://plan3alphasite.vercel.app/"><Image src={blkswan} height={400} width={1200}></Image></Link>
      <h4>Social media web scraper</h4>
      <Link href="https://github.com/mediocreRlplayer/socialScraper"><Image src={social}></Image></Link>
      <h4>DeFi App Chain</h4>
      <Link href="https://github.com/Plan-3/ignite-defi-loan"><Image src={appchain}></Image></Link>
      <h4>Token Factory</h4>
      <Link href="https://github.com/Plan-3/real-estate-factory"><Image src={token} style={{background: "white"}}></Image></Link>
      <h4>Tiered DAO</h4>
      <Link href="https://github.com/Plan-3/tierDao"><Image src={dao}></Image></Link>
    </div>
  )
}

export default Projects