/* eslint-disable react/no-typos */
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <div key={id}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <img src={coverImg} alt="coverImage" />
        <p>{summary}</p>
        {genres && genres.length > 0 ? (
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
