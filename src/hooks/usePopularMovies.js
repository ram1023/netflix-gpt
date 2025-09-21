import { useDispatch } from "react-redux";
import { POPULAR_MOVIE_URL, TMDB_FETCH_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies= () => {
  const dispatch = useDispatch();
  console.log("usePopularMovies called.....");

  async function getPopularMoviesList() {
    const movies = await fetch(POPULAR_MOVIE_URL, TMDB_FETCH_OPTIONS);
    const movieList = await movies.json();
    console.log("usePopularMoviesList : ", movieList.results);
    console.log("Dispatching action to addPopularMovies by calling it....");
    dispatch(addPopularMovies(movieList.results));
  }

  useEffect(() => {
    console.log("usePopularMovies useEffect called....");
    getPopularMoviesList();
  }, [])
}

export default usePopularMovies;