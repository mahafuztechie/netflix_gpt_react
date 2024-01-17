import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_CONSTANTS } from '../utils/constants';
import {addTopRatedMovies} from '../utils/movieSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies  = useSelector(store => store.movies?.topRatedMovies);

  //fetch data from TMDB api and update the store with the movies
  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_CONSTANTS);
    const json = await data.json();
    console.log("upcomng" +json.results);
    dispatch(addTopRatedMovies(json.results));

  }
  useEffect(() => {
    if(!topRatedMovies){
      getTopRatedMovies();
    }
  },[])
}
export default useTopRatedMovies;