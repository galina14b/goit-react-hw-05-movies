import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Layout } from "./Layout/Layout";
// import HomePage from "pages/HomePage/HomePage";
// import MoviesPage from "pages/MoviesPage/MoviesPage";
// import MovieInfoPage from "pages/MovieInfoPage/MovieInfoPage";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import ErrorPage from "./ErrorPage/ErrorPage";

const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieInfoPage = lazy(() => import("pages/MovieInfoPage/MovieInfoPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const ErrorPage = lazy(() => import("./ErrorPage/ErrorPage"));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/movie/:movieID" element={<MovieInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={ <Reviews/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
};
