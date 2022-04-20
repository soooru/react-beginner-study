import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState({});
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    );
    let newData = await response.json();
    setMovies(newData.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <Link to={`/home`}>뒤로가기</Link>
          <h2>{movie.title}</h2>
          <img src={movie.medium_cover_image} alt="coverImage" />
          {movie.genres && movie.genres.length > 0 ? (
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          ) : null}
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
