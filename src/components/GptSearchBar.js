import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openAi from '../utils/openai';
import { API_CONSTANTS } from '../utils/constants';
import {addGptMovieResults}  from '../utils/gptSlice'

const GptSearchBar = () => {

  const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_CONSTANTS);
      const json = await data.json();
      console.log("json results"+json.results);
      return json.results;
    }

    const handleGptSearchClick = async () => {
      console.log(searchText.current.value);
      // Make an API call to GPT API and get Movie Results
  
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  
      const gptResults = await openAi.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
  
      if (!gptResults.choices) {
        // TODO: Write Error Handling
      }
  
      console.log(gptResults.choices?.[0]?.message?.content);
  
      // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  
      // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
  
      // For each movie I will search TMDB API
  
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]
  
      const tmdbResults = await Promise.all(promiseArray);
  
      console.log(tmdbResults);
  
      dispatch(
        addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    

  };
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar