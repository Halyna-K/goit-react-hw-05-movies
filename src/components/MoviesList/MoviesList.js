import s from "./MoviesList.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MoviesList = ({ movies }) => (
  <ul className={s.list}>
    {movies.map((movie) => (
      <li key={movie.id} className={s.item}>
        <Link className={s.text} to={`/movies/${movie.id}`}>
          <img
            src={`${IMG_URL}${movie.backdrop_path}`}
            alt={movie.title}
            title={movie.title}
            className={s.img}
          />
          <br />
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
