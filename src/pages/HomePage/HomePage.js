import { useEffect, useState } from "react";
import api from "../../Services/api";
import Title from "../../components/Title/Title";
import { MoviesList } from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    api.fetchTrends().then((data) => setTrends(data.results));
  }, []);

  return (
    <>
      <Title text="Trending today" />
      {trends && <MoviesList movies={trends} />}
    </>
  );
};
export default HomePage;
