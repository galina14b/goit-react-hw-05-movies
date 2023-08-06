import { Link, useLocation } from "react-router-dom";


const MoviesList = ({ moviesList }) => {
  
  const location = useLocation();
  
  return (
    <div className="list-group">
      {moviesList && moviesList.map(item => {
        return (
          <Link key={item.id} to={`/movies/movie/${item.id}`} state={{from: location}} className="list-group-item list-group-item-action" aria-current="true">
            {item.title}
          </Link>
        )
      })}
    </div>
  )
}

export default MoviesList;