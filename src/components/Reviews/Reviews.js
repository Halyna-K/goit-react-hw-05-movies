import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const Reviews = ({ reviews }) => {
  const { movieId } = useParams();
  const review = reviews.find((review) => review.id === movieId);
  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={movieId}>
            <b>{review.author}</b>
            <p>{review.content}</p>
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
