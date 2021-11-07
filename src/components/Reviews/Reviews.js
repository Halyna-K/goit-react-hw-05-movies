import s from "./Reviews.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const Reviews = ({ reviews }) => {
  const { movieId } = useParams();
  reviews.find((review) => review.id === movieId);
  return (
    <>
      <ul className={s.list}>
        {reviews.map((review) => (
          <li key={review.id} className={s.item}>
            <b className={s.text}>{review.author}</b>
            <p className={s.text}>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
