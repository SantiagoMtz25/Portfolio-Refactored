import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Fallback from './components/fallback/Fallback';
const LandingPage = lazy(() => import('./components/landingpage/LandingPage'));
const Experience = lazy(() => import('./components/experience/Experience'));
const Projects = lazy(() => import('./components/projects/Projects'));
const Workout = lazy(() => import('./components/workout/Workout'));
const Music = lazy(() => import('./components/music/Music'));
const MoviesSeries = lazy(() => import('./components/movies-series/MoviesSeries'));
const Writing = lazy(() => import('./components/writing/Writing'));
const Books = lazy(() => import('./components/books/Books'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            {/* <Route path='/fallback' element={<Fallback />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/music" element={<Music />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/movies-series" element={<MoviesSeries />} />
            <Route path="/books" element={<Books />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
