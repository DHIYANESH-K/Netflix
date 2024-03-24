import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="min-w-44">
        <img lt="Movie Card" src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard;