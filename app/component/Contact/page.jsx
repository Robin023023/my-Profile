import React from 'react'


import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from './contact.module.css'
import Bottom from '../bottom/page';

export default function page() {
  return (
    <div className={style.contact} id='Contact'>
        <p>I will contact you</p>
        <h1>I WANT TO HEAR FROM YOU</h1>

        <div className='row mt-5'>
        <div className='col-md-8'>
          <form>
          <div className='row'>
          <div className='col-md-6'>
            <input className='form-control py-4' type='text' name='name' placeholder='Your Name'/>
            <br/>
            <input className='form-control py-4' type='numbar' name='numbar' placeholder='Your Phon'/>
          </div>
          <div className='col-md-6'>
            <input className='form-control mt-4 mt-md-0 py-4' type='email' name='email' placeholder='Your Email'/>
            <br/>
            <input className='form-control py-4' type='text' name='subject' placeholder='Your Subject'/>
          </div>
        </div>
        <textarea className="form-control mt-4" rows={6} aria-label="With textarea" placeholder='Comment'></textarea>

        <button>Send Me Message</button>
          </form>
        </div>
        
        <div className='col-md-4 text-start mt-3 mt-md-0'>
          <div className={style.formLetter}>
            <div>
              <FaLocationDot className={style.icon}/>
            </div>
            <div>
              <h4>Address</h4>
              <p>202 Dog Hill Lane Beloit, KS 67420</p>
            </div>
          </div>

          <div className={style.formLetter}>
            <div>
             <FaPhoneVolume className={style.icon}/>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+01589634755</p>
            </div>
          </div>

          <div className={style.formLetter}>
            <div>
            <MdEmail className={style.icon}/>
            </div>
            <div>
              <h4>Email</h4>
              <p>023023robin@gmail.com</p>
            </div>
          </div>
        </div>
        
        </div>

        <Bottom/>
    </div>
  )
}
