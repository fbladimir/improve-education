import React from 'react'
import { useState } from 'react'
import './navbar2.css'




const Navbar2 = () => {

  const [activeNav, setActiveNav] = useState('#header');


  return (
    <nav2> 
    
    <a2 href='#' onClick={()=> setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a2>
      <a2 href='#' onClick={()=> setActiveNav('/universities')} className={activeNav === '/universities' ? 'active' : ''}>Universities</a2>
      <a2 href='#' onClick={()=> setActiveNav('/trial')} className={activeNav === '/trial' ? 'active' : ''}>Trial </a2> 
      <a2 href='#'> Testing </a2>

    </nav2> 
  )
}

export default Navbar2