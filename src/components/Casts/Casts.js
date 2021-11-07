import s from "./Casts.module.css";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Casts = ({ casts }) => {
  const { movieId } = useParams();
  casts.find((cast) => cast.id === movieId);
  return (
    <>
      <ul className={s.list}>
        {casts.map((cast) => (
          <li key={cast.id} className={s.item}>
            <img
              src={`${IMG_URL}${cast.profile_path}`}
              alt={cast.name}
              title={cast.title}
              className={s.img}
            />
            <Title text={cast.name} className={s.text} />
            <p className={s.text}>
              <span>Character: </span>
              {cast.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
