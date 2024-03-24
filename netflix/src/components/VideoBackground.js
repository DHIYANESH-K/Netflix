import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    // let [trailerId,setTrailerId]=useState(null);
    let trailerVideo=useSelector(store=>store.movies.trailerVideo);
    // console.log(trailerVideo);
    useMovieTrailer(movieId);
    return (
      <div className="">
          {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
          <iframe className="w-full h-screen"
          width="560" height="315" src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&showinfo=0"} title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      
  )
}

export default VideoBackground;