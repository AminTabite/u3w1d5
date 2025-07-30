import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery1 from "../components/Gallery1";
import Gallery2 from "../components/Gallery2";
import Gallery3 from "../components/Gallery3";
import Tvshow from "../components/Tvshow";
import MovieDetails from "../components/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/gallery-one" element={<Gallery1 />} />
        <Route path="/gallery-two" element={<Gallery2 />} />
        <Route path="/gallery-three" element={<Gallery3 />} />
        <Route path="/tvShow" element={<Tvshow />} />
        <Route path="/movieDetails/:moviecode" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
