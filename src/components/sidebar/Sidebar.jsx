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
  import React, { useContext } from "react";
  import { AuthContext } from "../../context/AuthContext";
  import MenuLink from "../menuLink/MenuLink";
  import "./sidebar.css";
  import { useNavigate } from "react-router-dom";
  
  const Sidebar = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogout = (e) => {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    };

    const handleHome = (e) => {
      dispatch({ type: "" });
      navigate("/home");
    };

    const handleUniversity = (e) => {
      dispatch({ type: "" });
      navigate("/universities");
    };

    const handleFiu = (e) => {
      dispatch({ type: "" });
      navigate("/FIU");
    };
  
    return (
      <div className="sidebar">
        <div className="sidebarbarWrapper">

          <span onClick={handleHome}> 
          <MenuLink icon={<HomeOutlined />} text="Homepage" />
          </span> 

          <span onClick={handleUniversity}> 
          <MenuLink icon={<List />} text="Universities" />
          </span> 

          <MenuLink icon={<ShoppingBasketOutlined />} text="Pending Comments" />

          <span onClick={handleFiu}> 
          <MenuLink icon={<GroupOutlined />} text="My University" />
          </span> 

          <MenuLink icon={<FileCopyOutlined />} text="Pages" />
          <MenuLink icon={<ScheduleOutlined />} text="Posts Under Review" />
          <MenuLink icon={<Settings />} text="Account Settings" />
          <span onClick={handleLogout}>
            <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
          </span>
        </div>
      </div>
    );
  };
  
  export default Sidebar;