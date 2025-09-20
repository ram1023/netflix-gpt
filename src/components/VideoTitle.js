const VideoTitle = ({movie}) => {
  let poster_path, overview, title;

  if(movie) {
    //poster_path = movie.poster_path;
    overview = movie.overview;
    title = movie.title;
  }
  
  return <div className="mx-40 w-1/3 pt-28 pl-5 z-10 absolute">
    {/* <img className="h-[300px] w-4/6 " alt="video movie poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/> */}
    <h1 className="text-white font-bold text-4xl pb-2 pt-28">{title}</h1>
    <p className="text-lg text-white w-4/6 font-semibold"> {overview} </p>
    <button className="bg-white text-black rounded-md w-40 p-4 font-bold border-gray-100 border-2 text-2xl hover:bg-opacity-80"> Play </button>
    <button className="bg-zinc-500 text-white rounded-md w-40 p-4 m-2 font-bold border-gray-500 border-2 text-2xl hover:bg-opacity-10"> More Info</button>
  </div>
}

export default VideoTitle;