import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoaderSpinner from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import HomePage from "./pages/HomePage/HomePage";
// import NotFound from './pages/NotFound/NotFound';

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const NotFound = lazy(() =>
  import(
    "./components/NotFound/NotFound" /* webpackChunkName: "NotFoundPage" */
  )
);

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/movies">
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route>
              <NotFound text="Page not found" />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
