"use client"

import React, { useEffect } from 'react'
import styles  from './portfolio.module.css';
import $ from 'jquery'
import Image from 'next/image';

export default function Tab() {
  useEffect(()=>{
    var $btns = $('.btn').click(function() {
      if (this.id == 'all') {
        $('#parent > div').fadeIn(450);
      } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > div').not($el).hide();
      }
      $btns.removeClass('active');'[=]'
      $(this).addClass('active');
    }) 
  })
  return (
    <div className={styles.tab}>
      <button className="btn active" id="all">All</button>
      <button className="btn" id="UI">UI/Ux Design</button>
      <button className="btn" id="Branding">Branding Design</button>
      <button className="btn" id="Graphic">Graphic Design</button>
      <button className="btn" id="App">App Development</button>
      <button className='btn' id='Web'>Web Design</button>

<div className="spacer"></div>

<div id="parent" className='row'>
  <div className='col-lg-4 all'>
  <div className={styles.box}>
    <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFive.png' alt='uu'/>
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>
      

      <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFour.png' alt='tt'/>
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>

      <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioThree.png' alt='ee'/>
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>
  </div>
  </div>
  <div className='col-lg-4 UI Graphic App'>
  <div className={styles.box}>
  <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioTwo.png' alt='uu'/>
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>
      <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFour.png' alt='66'/>
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>

      <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFour.png' alt='hh'/>
    
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>
  </div>
  </div>
  
  <div className='col-lg-4 Branding UI Web'>
  <div className={styles.box}>
  <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFour.png' alt='ss'/>
    
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>

      <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFour.png' alt='yy'/>
    
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>

      <div className={styles.image}>
    <Image width={1000} height={50} src='/img/portfolioFour.png' alt='aa'/>
    
    
      <div className={styles.text}>
      <span>Graphic Design</span>
      <h4>The best way to impress your web</h4>
      </div>
      </div>
  </div>
  </div>
</div>
    </div>
    
  )
  
}