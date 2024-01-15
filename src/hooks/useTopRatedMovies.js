import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANTS } from '../utils/constants';
import {addTopRatedMovies} from '../utils/movieSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

  //fetch data from TMDB api and update the store with the movies
  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_CONSTANTS);
    const json = await data.json();
    console.log("upcomng" +json.results);
    dispatch(addTopRatedMovies(json.results));

  }
  useEffect(() => {
    getTopRatedMovies();
  },[])
}
export default useTopRatedMovies;