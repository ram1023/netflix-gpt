import { useDispatch, useSelector } from "react-redux";
import { TMDB_FETCH_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addVideoTrailer } from "../utils/moviesSlice";

  
  const useVideoTrailer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
   // const [movieTrailerKey, setMovieTrailerKey] = useState(null);
    const movie = movies ? movies[0] : null;
    const dispatch = useDispatch();
    //create a separate state for movies as well
    console.log("useVideotrailer called.....");
    console.log("movie", movie);

  async function getMovieTrailer (movie) {
    try {
      //const id = 1311031;
      const movieTrailers = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, TMDB_FETCH_OPTIONS);
      const movieTrailersJson = await movieTrailers.json();
      console.log("movieTrailersJson : ", movieTrailersJson);
      const videoTrailer = movieTrailersJson?.results[11];
      //const movieTrailerKey= movieTrailersJson?.results[11]?.key;
      dispatch(addVideoTrailer(videoTrailer));
      //setMovieTrailerKey(movieTrailerKey);
    } catch(error) {
      console.log("error in fetching movie trailers : ", error);
    }
  }

  useEffect(() => {
    console.log("useVideoTrailer useEffect called....");
    if(movie){
      getMovieTrailer(movie);
    }
  },[movie])

  }
  
  
  export default useVideoTrailer;