import react from 'react'

import styles from './bottom.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoEarthSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

const Bottom =()=>{

    
    return(
        <div className={styles.bottom}>
            <div className='row'>
                <div className='col-lg-3 col-md-6'>
                    <h1>Robin</h1>
                    <p>At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati</p>

                    <h3>023023robin@gmail.com</h3>
                </div>
                <div className='col-lg-3 col-md-6'>
                 <h1>Explore Link</h1>
                 <ul>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Resume'>Resume</a></li>
                    <li><a href='#Portfolio'>Portfolio</a></li>
                    <li><a href='#Blog'>Blog</a></li>
                 </ul>
                </div>
                <div className='col-lg-3 col-md-6'>
                 <h1>My Services</h1>
                 <ul>
                    <li><a href='#Services'>UI/UX Design</a></li>
                    <li><a href='#Services'>Mobile App</a></li>
                    <li><a href='#Services'>Graphics Design</a></li>
                    <li><a href='#Services'>Web Developer</a></li>
                 </ul>
                </div>
                <div className='col-lg-3 col-md-6'>
                 <h1>Follow me</h1>
                 
                 <span><FaFacebookF size={40} className={styles.icons}/></span>
                 <span><FaTwitter size={40} className={styles.icons}/></span>
                 <span><IoShareSocialOutline size={40} className={styles.icons}/></span>
                 <span><IoEarthSharp size={40} className={styles.icons}/></span>

                 <p><FaLocationDot className={styles.icon}/> 202 Dog Hill Lane Beloit,KS 67420</p>
                 <p><FaPhoneVolume className={styles.icon}/>1-800-915-6270</p>
                </div>
            </div>

            <hr/>

            
                
                    <p>All rights reserved © 2023 Credesign</p>
                
                
                    <span>Terms & Condition</span> 
                    <br/>
                    <span>Privacy policy</span>



                
                
            
        </div>
    )
}

export default Bottom