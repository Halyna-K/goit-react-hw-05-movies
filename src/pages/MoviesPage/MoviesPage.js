import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import api from "../../Services/api";
import Button from "../../components/Button/Button";
import LoaderSpinner from "../../components/Loader/Loader";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useToggle(false);
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  // const [result, setResult] = useState([]);

  useEffect(() => {
    if (!query) return;
    setQuery();
    api
      .fetchMovies(query, page)
      .then((data) => setMovies(data.results))
      .catch((err) => {
        setError(error);
        console.log(err);
      });
    setPage((prev) => prev + 1);
  }, [query, page, error, setMovies]);

  const getQuery = ({ query, page }) => {
    setQuery(query);
    setMovies(movies);
    if (!setQuery(query)) return;
    setIsLoading(!isLoading);
  };

  const onClickGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  // const onClickLoadMore = () => {
  //   api
  //     .fetchMovies(query, page)
  //     .then((result) => {
  //       setResult((prev) => [...prev, ...result]);
  //       if (page === 1) {
  //         scrollToBottom();
  //       }
  //     })
  //     .catch((err) => {
  //       setError(error);
  //       console.log(err);
  //     });
  // };
  // const scrollToBottom = () => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   });
  // };

  return (
    <>
      <Button text="Go back" onClick={onClickGoBack} />
      <SearchBar getQuery={getQuery} />

      {isLoading && <LoaderSpinner />}

      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default MoviesPage;
