import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoaderSpinner from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import HomePage from "./pages/HomePage/HomePage";
// import NotFound from './pages/NotFound/NotFound';

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: Home Page */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: Movies Page */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: Movie Details Page */
  )
);
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound" /* webpackChunkName: Not Found Page */)
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
              {/* <NotFound text='We don't have reviews for this movie.'/> */}
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
