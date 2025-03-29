import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

// import css from './App.module.css';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';

const Navigation = lazy(() => import('../components/Navigation/Navigation'));

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../components/MovieReviews/MovieReviews'));
import { PageLoader } from '../components/Loaders/Loaders';

function App() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Navigation />

        <Section>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="/movies/:movieId/cast" element={<MovieCast />} />
                <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </Section>
      </Suspense>
    </>
  );
}

export default App;
