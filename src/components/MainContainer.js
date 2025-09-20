import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const MainContainer = ({movie, movieTrailerKey}) => {


  return <div className="relative">
    <VideoTitle movie={movie}/>
    <VideoTrailer movieTrailerKey={movieTrailerKey}/>
  </div>
}

export default MainContainer;