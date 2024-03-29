import "./navbar.css";
import React, { useContext } from "react";
import "./searchbar2/searchbar2.css";
import DefaultProfile from '../../assets/DefaultProfile.jpg'; 
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Account Dashboard</span>
        </div>
        <div className="navbarCenter">
        </div>
        <div className="navbarRight">
          <img
            className="profileImg"
            src={
              currentUser.photoURL
                ? currentUser.photoURL
                : "../../assets/DefaultProfile.jpg"
            }
            alt=""
          />
          <span className="navbarName">{currentUser.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
