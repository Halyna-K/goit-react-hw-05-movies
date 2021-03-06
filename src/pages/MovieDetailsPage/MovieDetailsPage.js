import { useEffect, useState, Suspense } from "react";
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../Services/api";
import LoaderSpinner from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Casts } from "../../components/Casts/Casts";
import { Reviews } from "../../components/Reviews/Reviews";
// import NotFound from "../../components/NotFound/NotFound";

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState(null);
  const [reviews, setReviews] = useState(null);
  // console.log(match);
  // console.log(history);
  // console.log(location);

  useEffect(() => {
    api.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  // console.log(movie);

  useEffect(() => {
    api.fetchCast(movieId).then((data) => setCasts(data.cast));
    api.fetchReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);
  // console.log(casts);
  // console.log(reviews);

  const onClickGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  return (
    <>
      <Button text="Go back" onClick={onClickGoBack} />

      {movie && <MovieCard movie={movie} />}

      <Title text={"Additional information"} />

      {movie && (
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <li>
              <NavLink
                to={`${match.url}/cast`}
                style={{
                  fontSize: "calc(8px + 2vmin)",
                  fontWeight: "bold",
                }}
                activeStyle={{ color: "black" }}
              >
                Casts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${match.url}/reviews`}
                style={{
                  fontSize: "calc(8px + 2vmin)",
                  fontWeight: "bold",
                }}
                activeStyle={{ color: "black" }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <Suspense fallback={<LoaderSpinner />}>
        <Route path={`${match.url}/cast`}>
          {casts && <Casts casts={casts} />}
        </Route>
        <Route path={`${match.url}/reviews`}>
          {reviews && <Reviews reviews={reviews} />}
          {/* <NotFound text="We don't have reviews for this movie" />; */}
        </Route>
      </Suspense>
    </>
  );
};

MovieDetailsPage.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
};
export default MovieDetailsPage;
