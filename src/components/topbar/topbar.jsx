import React from 'react'
import { useState } from 'react'
import './topbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import { TbSchool } from 'react-icons/tb'
import { MdOutlineRateReview } from 'react-icons/md'



const topbar = () => {

  const [activeNav, setActiveNav] = useState('#header');


  return (
    <nav> 
    
    <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#intro" onClick={()=> setActiveNav('#intro')} className={activeNav === '#intro' ? 'active' : ''}><VscAccount /></a>
      <a href='#'> <TbSchool /> </a> 
      <a href='#'> <MdOutlineRateReview /> </a>

    </nav> 
  )
}

export default topbar