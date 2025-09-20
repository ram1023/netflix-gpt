import useMovie from "../hooks/useMovie";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();
  const {movie, movieTrailerKey} = useMovie();
  return <>
  <Header/>
  <MainContainer movie={movie} movieTrailerKey={movieTrailerKey} />
  <SecondaryContainer/>
  </>
}

export default Browse;