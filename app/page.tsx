import React from 'react'
import Home from './component/Home/page'
import About from './component/About/page'
import Services from './component/Services/page'
import Resume from './component/Resume/page'
import Testimonial from './component/Testimonial/page'
import Portfolio from './component/Portfolio/page'
import Partnar from './component/Partnars/page'
import Blog from './component/Blog/page'
import Contact from './component/Contact/page'


export default function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Testimonial/>
      <Portfolio/>
      <Partnar/>
      <Blog/>
      <Contact/>
    </div>
  )
}