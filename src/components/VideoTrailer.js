const VideoTrailer = ({movieTrailerKey}) => {
  return <div className="-z-10">
    <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${movieTrailerKey}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${movieTrailerKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
}

export default VideoTrailer;