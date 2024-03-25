"use client"

import styles from './partnars.module.css'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import Image from 'next/image';


var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}

const option={
   margin:30,
   loop:true,
   dots:true,
   autoplay:true,
   autoplayTimeout:2000,
   responsive:{
       0:{
         items:2,
       },
       700:{
         items:3
       },
       900:{
         items:3,
       },
       1200:{
         items:6,
       },
   }

 }


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Partnar() {
  
  return (
    <div className={styles.partnar}>
      <p>My Portfolio</p>
      <h1>VISIT MY PORTFOLIO</h1>

      <OwlCarousel autoplay loop responsiveClass {...option}>


  <div className={styles.card}>
    <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerOne.png' alt='Partnar photo'/>
  </div>
  <div className={styles.card}>
    <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerTwo.png' alt='Partnar photo'/>
  </div>
  <div className={styles.card}>
    <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerThree.png' alt='Partnar photo'/>
  </div>
  <div className={styles.card}>
    <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerFour.png' alt='Partnar photo'/>
  </div>
  <div className={styles.card}>
   <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerFive.png' alt='Partnar photo'/>
  </div>
  <div className={styles.card}>
    <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerOne.png' alt='Partnar photo'/>
  </div>
  <div className={styles.card}>
    <Image className={styles.imgfluid} width={100} height={50} src='/img/partnerTwo.png' alt='Partnar photo'/>
  </div>
</OwlCarousel>
    </div>
  )
}