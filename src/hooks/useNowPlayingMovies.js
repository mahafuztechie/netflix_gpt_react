import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANTS } from '../utils/constants';
import {addNowPlayingMovies} from '../utils/movieSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  //fetch data from TMDB api and update the store with the movies
  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_CONSTANTS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  }
  useEffect(() => {
    getNowPlayingMovies();
  },[])
}
export default useNowPlayingMovies;