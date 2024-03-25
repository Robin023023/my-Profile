import React,{useState,useEffect} from 'react'

import styles from './Testimonial.module.css'
import Slider from "react-slick";
import Image from 'next/image';

export default function Carousel() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true,
    centerMargin:'60px',
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          
        }
      },

      {
        breakpoint:1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
    
  };

  useEffect(() => {
     fetch(" http://localhost:3000/api/slider")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])



  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


  return (
    <Slider {...settings}>
      {data && data.map((user,id)=>{
        return(    
            <div className={styles.Carousel} key={id}>
              <div className={styles.flex}>
                <div>
                  <Image className='img-fluid' src={user.img} width={100} height={100} alt='afa'/>
                </div>
                <div className={styles.text}>
                  <h3>{user.heading}</h3>
                  <p>{user.para}</p>
                </div>
              </div>
            <p className='mt-4'>{user.text}</p>
            </div>
        )
      })}
    </Slider>
  )
}
        