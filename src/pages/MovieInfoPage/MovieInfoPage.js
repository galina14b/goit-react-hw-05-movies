import { useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";


const MovieInfoPage = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/movies");

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3MmI4YmY3NzViNTQ2MGI4NWM1MTM3ZjdlYThiMCIsInN1YiI6IjY0Y2NjMzE3NzY0Yjk5MDEwMDg5ZmY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ThxIF28BeQiNBNVpfHRn1dS_7TjKdSPSguFk1068hc'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, options)
  .then(response => response.json())
  .then(response => setMovie(response))
  .catch(err => console.error(err));

  return (
    <div className="container">
      <Link to={backLinkHref.current}><button type="button" className="btn btn-primary my-4">Go Back</button></Link>
      {movie && <><div className="row align-items-start">
          <div className="col">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" width={400}/>
          </div>
          <div className="col">
            <h1>{movie.title}</h1>
            <p>User Score: {Math.trunc(movie.popularity)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movie.genres.map(item => {
              return (
                <li key={item.id}>
                  {item.name}
                </li>
              )
            })}
            </ul>
          </div>
        </div>
        <div>
          <hr/>
          <h3>Additional Information</h3>
          <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
          </ul>
          <hr/>
        </div>
        <Outlet/>
      </>
      }
    </div>
  )
}

export default MovieInfoPage;