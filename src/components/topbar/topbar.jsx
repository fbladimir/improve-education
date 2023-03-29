import {
  ExitToAppOutlined,
  FileCopyOutlined,
  GroupOutlined,
  HearingOutlined,
  HomeOutlined,
  List,
  MovieCreationOutlined,
  PhotoSizeSelectActualOutlined,
  ScheduleOutlined,
  Settings,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import React, {useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import MenuLink from "../menuLink/MenuLink";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import './topbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import { GiSchoolBag } from 'react-icons/gi'
import { RiLogoutCircleLine } from 'react-icons/ri'



const Topbar = () => {

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const [activeNav, setActiveNav] = useState('#home');


  return (
    <nav> 
    
    <a href="/" onClick={()=> setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="/profile" onClick={()=> setActiveNav('/profile')} className={activeNav === '/profile' ? 'active' : ''}><VscAccount /></a>
      <a href="/universitiespage " onClick={()=> setActiveNav('/universitiespage')} className={activeNav === '/universitiespage' ? 'active' : ''}><GiSchoolBag /> </a> 
      <span onClick={handleLogout}> <MenuLink icon={<ExitToAppOutlined />}/> </span> 

    </nav> 
  )
}

export default Topbar
