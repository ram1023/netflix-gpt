import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  if(!movies) return;

  return movies && (<div className="bg-black" >
  <div className=" -mt-[380px] z-20 relative px-20">
    <MoviesList movies={movies.nowPlayingMovies} title={"Now Playing"}/>
    <MoviesList movies={movies.popularMovies} title={"Popular"}/>
    <MoviesList movies={movies.nowPlayingMovies} title={"Trending"}/>
    <MoviesList movies={movies.nowPlayingMovies} title={"Thriller"}/>
  </div>
  </div>)
}

export default SecondaryContainer;