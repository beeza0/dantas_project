import React from "react";
import './styles.css'

//@ts-ignore
import ProfileIcon from "../../assets/png/profile-icon.png"

export default function Navbar() {

  return (
        <div className='navbar-container'>
          <a className="active" href="#SplitWise">SplitWise</a>
          <a href="#Groups">My Groups</a>
          <div id="navbar-profile-icon">
              <img src={ProfileIcon} alt="Profile Icon" className="profile-icon-anonymous" />
              <a href="#Profile" >Profile</a>
          </div>
          
        </div>
  );
};