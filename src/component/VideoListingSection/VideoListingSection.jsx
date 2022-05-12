import React from "react";
import { useQueryData } from "../../context/qureyDataContext/QueryDataContext";
import { VideoCard } from "../index";
import style from "./VideoListingSection.module.css"
function VideoListingSection() {
  const { queryData } = useQueryData();
  console.log(queryData);
  return (
    <div className={`${style.listingSection}`}>
      {
        queryData?.map((item) => {
          return <VideoCard videoData={item} />;
        })}
    </div>
  );
}
export default VideoListingSection;
