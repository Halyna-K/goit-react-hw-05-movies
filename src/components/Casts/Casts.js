import s from "./Casts.module.css";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Casts = ({ casts }) => {
  const { movieId } = useParams();
  const cast = casts.find((cast) => cast.id === movieId);
  return (
    <>
      <ul>
        {casts.map((cast) => (
          <li key={movieId}>
            <img
              src={`${IMG_URL}${cast.profile_path}`}
              alt={cast.name}
              title={cast.title}
              className={s.poster}
            />
            <Title text={cast.name} />
            <p className={s.name}>{cast.name}</p>
            <p>
              <span>Character: </span>
              {cast.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
