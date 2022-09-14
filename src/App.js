import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Movie from "./pages/movie/Movie";
import TvSeries from "./pages/tv-series/TvSeries";
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/tvseries" element={<TvSeries />} />
        </Routes>
      </MovieContextProvider>
    </BrowserRouter >
  );
}

export default App;
