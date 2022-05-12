import React from "react";
import style from "./VideoCard.module.css";
import Tags from "./Tags";

function VideoCard({ videoData }) {
  const { heading, tags, video } = videoData;
  console.log(heading, tags, video);
  return (
    <div className={`${style.videoCard}`}>
      <video
        className={`${style.videoFit}`}
        controls
        src={video}
        type="video/mp4"
      />
      <div style={{width:"100%"}}>
       <h2>{heading}</h2>   
      </div>
      
      <div className={`${style.tagDiv}`}>
      {
          tags.map((item) => {
              return <Tags tagName={item} />
          })
      }    
      </div>
      
    </div>
  );
}
export default VideoCard;
