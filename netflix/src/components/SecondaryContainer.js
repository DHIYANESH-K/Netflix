import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className=" bg-black">
      <div className='px-8 -mt-40 relative z-20 font-mono'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"UpComing"} movies={movies.upComingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer;