import { useSelector } from "react-redux";
import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

  
  const useMovie = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    const [movieTrailerKey, setMovieTrailerKey] = useState(null);
    const movie = movies ? movies[0] : null;
    console.log("movie", movie);

  async function getMovieTrailer (movie) {
    try {
      //const id = 1311031;
      const movieTrailers = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, TMDB_FETCH_OPTIONS);
      const movieTrailersJson = await movieTrailers.json();
      console.log("movieTrailersJson : ", movieTrailersJson);
      const movieTrailerKey= movieTrailersJson?.results[11]?.key;
      setMovieTrailerKey(movieTrailerKey);
    } catch(error) {
      console.log("error in fetching movie trailers : ", error);
    }
  }

  useEffect(() => {
    if(movie){
      getMovieTrailer(movie);
    }
  },[movie])

  return {movie, movieTrailerKey};
  }
  
  
  export default useMovie;