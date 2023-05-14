import { useState } from 'react'
import image from "./yoga.jpg"
import Footer from '../components/Footer'
 

export default function Home() {
  

  return (
    <>
      <img src={image} className="w-full h-auto" alt="Image" />
      <Footer/>
      </>
  ) 
}

// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
