import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import Widget from "../widget/Widget";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Widget type="user" />
        <Widget type="popular" />
        <Widget type="editor" />
    
        <button href="/home" className="rightButton">
          Top University: Florida International University
          <ArrowDropDown />
     
        </button>
      </div>
    </div>
  );
};

export default Rightbar;