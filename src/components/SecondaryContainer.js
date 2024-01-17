import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies && (
    <div className='bg-black'>
      <div className='w-screen md:px-6 text-white mt-0 md:-mt-[200px] relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer