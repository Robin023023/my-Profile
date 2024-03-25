"use client"

import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import styles from './blog.module.css'
import Card from '../Card/page'
import Image from 'next/image';

export default function Blog() {
  const[data,setData]=useState([]);
  const [isLoading,setLoading]=useState(true);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal); 

  useEffect(()=>{
    fetch("http://localhost:3000/api/blog")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data)
      setLoading(false)
    })
  },[])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  

  return (
    <div className={styles.Blog} id='Blog'>
      <p>My Blog</p>
      <h1>LATEST BLOG</h1>
     <div className='row'>
     {data && data.map((blog,id)=>{
        return(
          <div className='col-md-4' key={id}>
            <div className='card mt-4'>
              <div className={styles.image}>
              <Image 
                src={blog.img} 
                alt='card-photo' 
                onClick={toggle} 
                width={300} // Set width
                height={200} // Set height
              />
              </div>
                <div className={styles.textarea}>
                <p>{blog.date}</p>
                <h3>{blog.heading}</h3>
                <a href=''>{blog.click}...</a>
                </div>
              </div>
            
          </div>
        )
      })}

     </div>
    
    <Modal size="sm" style={{maxWidth: '80%', width: '100%'}} isOpen={modal}>
      <ModalHeader>
        <ModalBody>
          <Card modalToggle={toggle}/>
        </ModalBody>
      </ModalHeader>
    </Modal>
    </div>
    
  )
}
