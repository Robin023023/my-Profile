import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import { AiOutlineUser } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FaRegCheckSquare } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaReplyAll } from "react-icons/fa";


export default function Card(props) {
  return (
    
    <div className={styles.card} onClick={props.modalToggle}>
     
    <div className='card'>
    <Image className='img-fluid' src="/img/card1.png" width={1000} height={50} alt='card-image'/>
      

      <div className='card-body'>
      <AiOutlineUser className={styles.icon}/> <span>Roy Gallagher</span> 
      <SlCalender className={styles.icon}/> <span>12.09.2023</span>
        <h1>Become A UX/UI Designer With Career Foundry And New Creative Design New Idea Generate!</h1>

        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expo the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him</p>

   <div className={styles.sentence}>
    <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</h3>

    <h4>-Roy Gallagher</h4>
   </div>

   <div className='row mt-5 pt-5'>
    <div className='col-xl-6'>
       <Image className={styles.tikImage} src="/img/card3.png" width={1000} height={100} alt='card-image'/>
    </div>
    <div className='col-xl-6'>

      <ul>
        <li>
        <p><FaRegCheckSquare className={styles.icons}/></p>
        <h4 className={styles.iconText}>Research and analysis.</h4>
        </li>
        <li>
        <p><FaRegCheckSquare className={styles.icons}/></p>
        <h4 className={styles.iconText}>Concept development.</h4>
        </li>
        <li>
        <p><FaRegCheckSquare className={styles.icons}/></p>
        <h4 className={styles.iconText}>Sketching and prototyping.</h4>
        </li>
        <li>
        <p><FaRegCheckSquare className={styles.icons}/></p>
        <h4 className={styles.iconText}>Technical skills and software proficiency.</h4>
        </li>
        <li>
        <p><FaRegCheckSquare className={styles.icons}/></p>
        <h4 className={styles.iconText}>Communication and collaboration.</h4>
        </li>
      </ul>
      
      
    </div>
   </div>
     <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>

   <div className={styles.useful}>
     <div className='row'>
      <div className='col-md-6'>
      <div className='row'>
      <div className='col-md-6'>
        <p>Is this content most useful</p>
      </div>
      <div className='col-md-6'>
        <span className={styles.icon2}><BiLike className={styles.icon}/>Like</span>
        <span className={styles.icon2}><AiOutlineDislike className={styles.icon}/>Dislike</span>
      </div>
     </div>
      </div>
      <div className='col-md-6'></div>
     </div>
    </div> 


     <div className='row border mx-2 rounded my-5 '>
      <div className='col-md-10'>
        <p><b>Tags:</b> UI/UX Design,Mobile App,Graphics Design</p>
      </div>
      <div className='col-md-2 mt-0'>
        <span><IoShareSocialOutline size={20} className={styles.icon}/></span>
        <span><FaFacebookF size={20} className={styles.icon}/></span>
        <span><FaTwitter size={20} className={styles.icon}/></span>
        <span><IoEarthSharp size={20} className={styles.icon}/></span>
        
      </div>
     </div>
     </div>  

     <div className={styles.review}> 
     <h4 className='mb-5'>Comment (4)</h4>

     <div className='row '>
      <div className='col-lg-2'>
        <Image className={styles.img} src='/img/man1.jpg' width={1000} height={100} alt='dhgd'/>
      </div>
      <div className='col-lg-10'>
        <h4 className='mt-3 mt-md-0'>Elayne Warner</h4>
        <p>12.09.2023 | 10:30 am</p>
        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him</p>
        <span><BiLike className={styles.icon}/>Like</span>
        <span><AiOutlineDislike className={styles.icon}/>Dislike</span>
        <span className={styles.iconReply}><FaReplyAll className={styles.iconReply2}/>Reply</span>
      </div>
     </div>
     <hr/>

     <div className='row py-4'>
      <div className='col-lg-2'>
      <Image className={styles.img} src='/img/man2.jpg' width={1000} height={100}  alt='fgjf'/>
      </div>
      <div className='col-lg-10'>
      
      
        <h4 className='mt-3 mt-md-0'>David Waite</h4>
        <p>12.09.2023 | 10:30 am</p>
        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him</p>
        <span><BiLike className={styles.icon}/>Like</span>
        <span><AiOutlineDislike className={styles.icon}/>Dislike</span>
        <span className={styles.iconReply}><FaReplyAll className={styles.iconReply2}/>Reply</span>
        </div>
    
     </div>
    <hr/>
    
    
     <div className='row py-4'>
      <div className='col-lg-2'>
        <Image className={styles.img} src='/img/man3.jpg' width={1000} height={100}  alt=''/>
      </div>
      <div className='col-lg-10'>
        <h4 className='mt-3 mt-md-0'>Nannie Somerville</h4>
        <p>12.09.2023 | 10:30 am</p>
        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him</p>
        <span><BiLike className={styles.icon}/>Like</span>
        <span><AiOutlineDislike className={styles.icon}/>Dislike</span>
        <span className={styles.iconReply}><FaReplyAll className={styles.iconReply2}/>Reply</span>
      </div>
     </div>
     <hr/>

     <div className='row pt-4'>
      <div className='col-lg-2'>
        <Image className={styles.img} src='/img/man4.jpg' width={1000} height={100}  alt='gdd'/>
      </div>
      <div className='col-lg-10'>
        <h4 className='mt-3 mt-md-0'>William Ortiz</h4>
        <p>12.09.2023 | 10:30 am</p>
        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him</p>
        <span><BiLike className={styles.icon}/>Like</span>
        <span><AiOutlineDislike className={styles.icon}/>Dislike</span>
        <span className={styles.iconReply}><FaReplyAll className={styles.iconReply2}/>Reply</span>
      </div>
     </div>
     </div>

     <div className='p-5'>
      <h1>Leave your comment</h1>
      <form className='mt-4'>
        <div className='row'>
          <div className='col-md-6'>
            <input className='form-control py-4' type='text' name='name' placeholder='Your Name'/>
          </div>
          <div className='col-md-6'>
            <input className='form-control mt-4 mt-md-0 py-4' type='email' name='email' placeholder='Your Email'/>
          </div>
        </div>
        <textarea className="form-control mt-4" rows={6} aria-label="With textarea" placeholder='Comment'></textarea>
        <br/>
        <button className='btn btn-danger '>Post Comment</button>
      </form>
     </div>
    </div>
    </div>
    
  )
}
