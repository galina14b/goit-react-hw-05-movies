import { useState } from "react";

import MoviesList from "components/MoviesList/MoviesList";

const HomePage = () => {

  const [ moviesList, setMoviesList ] = useState();


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3MmI4YmY3NzViNTQ2MGI4NWM1MTM3ZjdlYThiMCIsInN1YiI6IjY0Y2NjMzE3NzY0Yjk5MDEwMDg5ZmY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ThxIF28BeQiNBNVpfHRn1dS_7TjKdSPSguFk1068hc'
  }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => setMoviesList(response.results))
  .catch(err => console.error(err));

  return (
    <div className="container">
      <h1>Trending Today</h1>
      <MoviesList moviesList={moviesList}/>
    </div>
  )
}

export default HomePage;