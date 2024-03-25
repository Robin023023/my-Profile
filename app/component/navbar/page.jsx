"use client"
import Link from 'next/link';
import React from 'react';
import{Link as ScrollLink} from 'react-scroll'
import { Navbar, Nav} from 'react-bootstrap';
import  styles from'./Navbar.module.css'

const MyNavbar = () => {

  return (
    
    <Navbar className={styles.navbar} fixed='top' expand="lg"> 
    <div className='container'>
    
        <Link className={styles.blog} href="#Home">Robin</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            
            <ScrollLink className={styles.Link} to='Home'>Home</ScrollLink>
            <ScrollLink className={styles.Link} to='About'>About</ScrollLink>
            <ScrollLink className={styles.Link} to='Services'>Services</ScrollLink>
            <ScrollLink className={styles.Link} to='Resume'>Resume</ScrollLink>
            <ScrollLink className={styles.Link} to='Testimonial'>Testimonial</ScrollLink>
            <ScrollLink className={styles.Link} to='Portfolio'>Portfolio</ScrollLink>
            <ScrollLink className={styles.Link} to='Blog'>Blog</ScrollLink>     
            <ScrollLink className={styles.Link} to='Contact'>Contact</ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </div>   
    </Navbar>
    
  );
};

export default MyNavbar;
