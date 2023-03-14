import React from "react";
import Update from "../../components/update/Update";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/topbar"; 
import "./profile.css";

const Home = () => {
  return (
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
          <Sidebar />
          <Update />
          <Rightbar />
          <Topbar /> 

        </div>
      </>
    </div>
  );
};

export default Home;