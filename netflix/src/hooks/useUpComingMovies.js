import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpComingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useUpComingMovies = () => 
{
    const dispatch=useDispatch();
    let a=useSelector(store=>store.movies);
    const getUpComingMovies=async()=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
      const json=await data.json();
    //   console.log(json.results);
      dispatch(addUpComingMovies(json.results));
      // console.log(a.nowPlayingMovies);
    };
    useEffect(()=>{getUpComingMovies();},[])
}

export default useUpComingMovies;