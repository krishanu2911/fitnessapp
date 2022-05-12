import React from "react";
import style from "./VideoCard.module.css";

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
      <h2>{heading}</h2>
      {/* {
          tags.map((item) => {
              return <h1>{item}</h1>
          })
      } */}
      {/* <h2>{video}</h2> */}
    </div>
  );
}
export default VideoCard;
