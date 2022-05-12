import "./App.css";
import React from "react";
import { Header, Footer, VideoListingSection } from "./component/index";
function App() {
  return (
    <div className="App">
      <Header />
      <VideoListingSection />
      {/* <div className="videoCard">
        <video className="videoFit" controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
        </video>
        <h2>squat:BE3IjD</h2>
      </div> */}
    </div>
  );
}

export default App;
