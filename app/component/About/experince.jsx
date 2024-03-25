import React from 'react'

import { AiOutlineCheckSquare } from 'react-icons/ai';
import styles from './About.module.css'
import Image from 'next/image';

export default function Experince() {
  return (
    <>
     <div className='row'>
      <div className='d-flex my-5 col-md-6'>
        <div className='me-3'>
           {/* <img src='img/tik.png'/> */}
           <Image src='/img/tik.png' width={50} height={50} alt='icon-photo'/>
        </div>
        <div>
          <h4 className='text-danger fw-bolder'>10+</h4>
          <h4 className={styles.text3}>Complete Project</h4>
          <div className={styles.Icon}>
          <AiOutlineCheckSquare  size={20} color='red'/> <span>Work simple and cline design</span>
          <br/>
          <AiOutlineCheckSquare  size={20} color='red'/> <span>New idea and user friendly design</span>
          </div>
        </div>
        
      </div>
      <div className='d-flex col-md-6 my-5'>
        <div className='me-3'>
        <Image src='/img/watch.png' width={50} height={50} alt='icon-photo'/>
        </div>
        <div>
          <h4 className='text-danger fw-bolder'>5+</h4>
          <h4 className={styles.text3}>Year of experience</h4>
          <div className={styles.Icon}>
          <AiOutlineCheckSquare size={20} color='red'/> <span>Web Design Full stack</span>
          <br/>
          <AiOutlineCheckSquare  size={20} color='red'/> <span>Unlimited Revisions</span>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
