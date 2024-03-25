"use client"

import { useState,useEffect } from 'react'
import styles from './Services.module.css'
import Image from 'next/image';


export default function Services() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
     fetch(" http://localhost:3000/api/user")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div id='Services' className={styles.Services}>
      <p>My Service</p>
      <h1>SERVICES I OFFER</h1>
      <div className='row mt-4'>
      {data && data.map((user,id)=>{
        return(
          <div className='col-sm-6 col-lg-3 d-flex d-block-md my-3' key={id}>
            <div className={styles.box}>
            <Image src={user.img} alt='kaf' width={50} height={50}/>
            <h3>{user.heading}</h3>
            <p>{user.text}</p>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}