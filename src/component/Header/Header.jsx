import React from "react";
import style from "../Header/Header.module.css";
function Header() {
  return (
    <div className={`${style.headerSection}`}>
      <div>
        <img
          className={`${style.fitnessLogo}`}
          src="https://res.cloudinary.com/krishanucloud/image/upload/v1652291022/fitnessIcon_j1r5iy.jpg"
          alt="app-logo"
        />
      </div>
      <div className={`${style.searchBar}`}>
        <input
          className={`${style.searchInput}`}
          type="text"
          placeholder="Search your video"
        />
      </div>
      <div>
        <img
          className={`${style.profile}`}
          src="https://res.cloudinary.com/krishanucloud/image/upload/v1652297733/profileIcon_pbfhmt.png"
          alt="app-logo"
        />
      </div>
    </div>
  );
}
export default Header;
