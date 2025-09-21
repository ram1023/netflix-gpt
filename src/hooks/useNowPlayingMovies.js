import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIE_URL, TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  console.log("useNowPlayingMovies called.....");

  async function getNowPlayingMoviesList() {
    const movies = await fetch(NOW_PLAYING_MOVIE_URL, TMDB_FETCH_OPTIONS);
    const movieList = await movies.json();
    console.log("useNowPlayingMoviesList : ", movieList.results);
    console.log("Dispatching action to addNowPlayingMovies by calling it....");
    dispatch(addNowPlayingMovies(movieList.results));
  }

  useEffect(() => {
    console.log("useNowPlayingMovies useEffect called....");
    getNowPlayingMoviesList();
  }, [])

}

export default useNowPlayingMovies;
