import React, { useState } from "react";
import style from "../Header/Header.module.css";
import axios from "axios";
import { useQueryData } from "../../context/qureyDataContext/QueryDataContext" 
// let url = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${text}&numResults=${num}`;
function Header() {
  const { queryData, setQueryData } = useQueryData();
  // const [queryData, setQueryData] = useState([]);
  async function inputHandler(query) {
    try {
      const res = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=5`
      );
      setQueryData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(queryData)
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
          onChange={(e) => {
            e.target.value && inputHandler(e.target.value);
          }}
        />
      </div>
      {}
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
