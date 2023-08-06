import { useParams } from "react-router-dom";
import { useState } from "react";
import CastList from "components/CastList/CastList";

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3MmI4YmY3NzViNTQ2MGI4NWM1MTM3ZjdlYThiMCIsInN1YiI6IjY0Y2NjMzE3NzY0Yjk5MDEwMDg5ZmY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ThxIF28BeQiNBNVpfHRn1dS_7TjKdSPSguFk1068hc'
    }
  };

fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(response => setCast(response.cast))
  .catch(err => console.error(err));
  
  return (
    <div className="container">
      {cast && <ul>
        {cast.map(item => {
        return (
          <CastList key={item.id} name={item.name} img={`https://image.tmdb.org/t/p/original/${item.profile_path}`} character={item.character} />
        )
      })}
      </ul>}

      {cast && cast.length <= 0 && <div>We don`t have any information about cast for this movie.</div>}
    </div>
  )
}


export default Cast;