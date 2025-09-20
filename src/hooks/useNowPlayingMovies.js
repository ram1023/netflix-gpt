import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIE_URL, TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  async function getNowPlayingMoviesList() {
    const movies = await fetch(NOW_PLAYING_MOVIE_URL, TMDB_FETCH_OPTIONS);
    const movieList = await movies.json();
    console.log(movieList.results);
    dispatch(addNowPlayingMovies(movieList.results));
  }

  useEffect(() => {
    getNowPlayingMoviesList();
  }, [])

}

export default useNowPlayingMovies;
