import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  console.log("Browse called...");
  useNowPlayingMovies();
  usePopularMovies();
  //useMoviesList();
  return <>
  <Header/>
  <MainContainer />
  <SecondaryContainer/>
  </>
}

export default Browse;