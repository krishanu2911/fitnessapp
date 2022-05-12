import React, { useState , useEffect } from "react";
import style from "../Header/Header.module.css";
import axios from "axios";
import { useQueryData } from "../../context/qureyDataContext/QueryDataContext" 
function Header() {
  const { setQueryData } = useQueryData();
  const [ userInput , setUserInput ] = useState("");
  useEffect(() => {
    (async () => {
      try {
        if(userInput.length){
          const res = await axios.get(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${userInput}&numResults=5`
        );
        setQueryData(res.data.results);
        }else{
          setQueryData([])
        }
      } catch (error) {
        console.log(error);
      }
    })()
  },[userInput])
  // async function inputHandler(query) {
  //   try {
  //     const res = await axios.get(
  //       `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=5`
  //     );
  //     setQueryData(res.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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
             setUserInput(e.target.value)
            // e.target.value.length ? inputHandler(e.target.value): setQueryData([])
            // e.target.value.length ? inputHandler(e.target.value): setQueryData([])
          }}
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
