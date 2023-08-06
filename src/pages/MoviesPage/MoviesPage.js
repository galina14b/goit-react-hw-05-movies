import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesList/MoviesList";

const MoviesPage = () => {

  const [searchParams] = useSearchParams('');
  const movieName = searchParams.get("movieName") ?? '';
  const [resultList, setResultList] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3MmI4YmY3NzViNTQ2MGI4NWM1MTM3ZjdlYThiMCIsInN1YiI6IjY0Y2NjMzE3NzY0Yjk5MDEwMDg5ZmY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ThxIF28BeQiNBNVpfHRn1dS_7TjKdSPSguFk1068hc'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setResultList(response.results))
      .catch(err => console.error(err));
    
    if (!resultList) {
      return
    }

  }, [movieName, resultList])

  return (
    <div className="container">
      <SearchForm/>
      {resultList && <MoviesList moviesList={resultList} />}
    </div>
  )
}

MoviesPage.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object)
}

export default MoviesPage;