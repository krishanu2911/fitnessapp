import './App.css';
import React from 'react';
import { Header, Footer, VideoListingSection } from "./component/index"
function App() {
  return (
    <div className="App">
      <Header />
      <VideoListingSection />
      <Footer />
    </div>
  );
}

export default App;
