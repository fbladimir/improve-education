import React from 'react'
import { useState } from 'react'
import './topbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import { GiSchoolBag } from 'react-icons/gi'
import { MdOutlineRateReview } from 'react-icons/md'



const Topbar = () => {

  const [activeNav, setActiveNav] = useState('#header');


  return (
    <nav> 
    
    <a href="/" onClick={()=> setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="/student" onClick={()=> setActiveNav('/student')} className={activeNav === '/student' ? 'active' : ''}><VscAccount /></a>
      <a href="/universities " onClick={()=> setActiveNav('/universities')} className={activeNav === '/universities' ? 'active' : ''}><GiSchoolBag /> </a> 
      <a href='#'> <MdOutlineRateReview /> </a>

    </nav> 
  )
}

export default Topbar