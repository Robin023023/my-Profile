"use client"

import React from 'react'

import styles from './Testimonial.module.css'
import Carousel from './carousel'

export default function Testimonial() {
  

  return (
    <div id='Testimonial' className={styles.Testimonial}>
      <p>Testimonial</p>
      <h1>CLIENT FEEDBACK</h1>
      <Carousel/>

      
    </div>
  )
}
