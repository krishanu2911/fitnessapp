import React from "react";
import { useQueryData } from "../../context/qureyDataContext/QueryDataContext";
import { VideoCard, InitialPage } from "../index";
import style from "./VideoListingSection.module.css"
function VideoListingSection() {
  const { queryData } = useQueryData();
  return (
    <div className={`${style.listingSection}`}>
      {
        queryData.length ? queryData?.map((item) => {
          return <VideoCard videoData={item} />;
        })
        : <InitialPage />
    }
    </div>
  );
}
export default VideoListingSection;
