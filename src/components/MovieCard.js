import { MOVIE_CARD_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
  return <div className="w-48 p-2">
  <img className="" alt="Movie Card" src={ MOVIE_CARD_URL + movie.poster_path}/>
  </div>
}

export default MovieCard;