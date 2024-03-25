"use client"

import './globals.css'
import Navbar from './component/navbar/page'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import type { Metadata } from 'next'
import { Container } from 'react-bootstrap'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <Container>
        <Navbar/>
        {children}
        </Container>
      </body>
    </html>
  )
}
