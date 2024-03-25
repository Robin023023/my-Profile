import React from 'react'

import Experince from './experince'
import styles from './About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div id='About' className={styles.About}>
      <div className='row mt-5 pt-4'>
        <div className='col-xl-6'>
          <Image className={styles.photo} src={'/img/2.jpg'} width={550} height={700} alt='sgd'/>
        </div>
        <div className='col-xl-6 mt-5'>
          <p>About Me</p>
          <h1 className={styles.text1}>I Can Design Anything You Want</h1>

          <p className={styles.text2}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit <br/> quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>

          <Experince/>

          <button className={styles.button}>Download My CV</button>
        </div>
      </div>
    </div>
  )
}
