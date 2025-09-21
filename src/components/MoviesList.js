import MovieCard from "./MovieCard";

const MoviesList = ({movies, title}) => {
  return <div>
  <h1 className="text-3xl font-bold text-white py-2 px-2"> {title}  </h1>
  <div className="flex overflow-x-scroll no-scrollbar ">
    <div className="flex ">
    {movies && movies?.map(movie =><MovieCard key={movie.id} movie={movie}/> )}
    </div>
  </div>
  </div>
}

export default MoviesList;