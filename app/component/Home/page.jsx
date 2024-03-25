"use client"

import React from 'react'
import styles from './Home.module.css'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.row} id='Home'>
      <div className={styles.col1}>
        <p className={styles.text1}>I AM DESIGNER</p>
        <h1 className={styles.text2}>Creative Design and Web <span className='text-warning'> <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Design',
    1000,
    'Solutions',1000
  ]}
  speed={50}
  style={{ fontSize: '60px' }}
  repeat={Infinity}
/>
</span>
</h1>
        <p className={styles.text3}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>

        <button className={styles.button}>Download My CV</button>
      </div>
      <div>
        <Image className={styles.photo} src='/img/1.jpg' width={500} height={700} alt='agg'/>
        </div>   
    </div>
  )
}
