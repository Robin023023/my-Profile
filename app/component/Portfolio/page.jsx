import React from 'react'

import styles from './portfolio.module.css'
import Tab from './tab'

export default function Portfolio() {
  return (
    <div id='Portfolio' className={styles.Portfolio}>
      <p>My Portfolio</p>
      <h1 className={styles.heading}>VISIT MY PORTFOLIO</h1>
      <Tab/>
    </div>
  )
}
