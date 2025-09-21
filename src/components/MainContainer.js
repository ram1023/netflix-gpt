import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const MainContainer = () => {
  console.log("Main Container called....");
  return <div className="relative ">
    <VideoTitle/>
     <div className="absolute inset-0 bg-gradient-to-r from-black"></div>
    <VideoTrailer/>
  </div>
}

export default MainContainer;