import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    console.log(movies);
    if(!movies) return;
  return (
    <div>
        <div className="my-4">
            <h1 className="text-2xl pl-3 py-2 text-white">{title}</h1>
            <div className="mt-1">
            <div className="flex overflow-x-scroll gap-4">
                {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div></div>
        </div>
    </div>
  )
}

export default MovieList;