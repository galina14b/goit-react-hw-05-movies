import { useParams } from "react-router-dom";
import { useState } from "react";
import ReviewList from "components/ReviewList/ReviewList";


const Reviews = () => {

  const { movieID } = useParams();
  const [reviews, setReviews] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3MmI4YmY3NzViNTQ2MGI4NWM1MTM3ZjdlYThiMCIsInN1YiI6IjY0Y2NjMzE3NzY0Yjk5MDEwMDg5ZmY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ThxIF28BeQiNBNVpfHRn1dS_7TjKdSPSguFk1068hc'
    }
  };

fetch(`https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setReviews(response.results))
  .catch(err => console.error(err));
  
  return (
    <div className="container">
      {reviews && <ul>
        {reviews.map(item => {
        return (
          <ReviewList key={item.id} author={item.author} content={item.content} />
        )
      })}
      </ul>}

      {reviews && reviews.length <= 0 && <div>We don`t have any reviews for this movie.</div>}
    </div>
  )
}

export default Reviews;