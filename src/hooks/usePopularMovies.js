import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANTS } from '../utils/constants';
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();

  //fetch data from TMDB api and update the store with the movies
  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_CONSTANTS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));

  }
  useEffect(() => {
    getPopularMovies();
  },[])
}
export default usePopularMovies;