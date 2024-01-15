import { useDispatch } from 'react-redux';
import { API_CONSTANTS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVideos = async () => {

    //fetch data from TMDB api and update the store with the movies
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_CONSTANTS);
    const json = await data.json();
    //console.log(json);
    const filterMovieTrailers = json.results?.filter((video) => video.type === "Trailer");
    //console.log(filterMovieTrailers);
    const trailer = filterMovieTrailers.length ? filterMovieTrailers[0] : json.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
    getMovieVideos();
    },[]);
}

export default useMovieTrailer;