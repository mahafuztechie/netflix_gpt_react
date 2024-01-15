import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANTS } from '../utils/constants';
import {addUpcomingMovies} from '../utils/movieSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

  //fetch data from TMDB api and update the store with the movies
  const getUpcomingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_CONSTANTS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));

  }
  useEffect(() => {
    getUpcomingMovies();
  },[])
}
export default useUpcomingMovies;