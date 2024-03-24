import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => 
{
    const dispatch=useDispatch();
    let a=useSelector(store=>store.movies);
    const getTopRatedMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
      const json=await data.json();
    //   console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
      // console.log(a.nowPlayingMovies);
    };
    useEffect(()=>{getTopRatedMovies();},[])
}

export default useTopRatedMovies;