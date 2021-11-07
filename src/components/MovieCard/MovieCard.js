import s from "./MovieCard.module.css";
import PropTypes from "prop-types";
import Title from "../Title/Title";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MovieCard = ({ movie }) => {
  return (
    <>
      <article className={s.card}>
        <img
          src={`${IMG_URL}${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
          className={s.poster}
        />

        <div className={s.description}>
          <Title text={`${movie.title}`} />
          <p className={s.text}>User score: {`${movie.vote_average}` * 10}%</p>
          <Title text={"Overview"} />
          <p className={s.text}>{movie.overview}</p>
          <Title text={"Genres"} />

          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name},</li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }),
};
