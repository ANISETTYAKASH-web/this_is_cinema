import "./App.css";
import MovieCard from "./components/MovieCards";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import { Movieprovider } from "./contexts/MovieContext";
import Test from "./pages/test";
function App() {
  return (
    <Movieprovider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </main>
    </Movieprovider>
  );
}

export default App;
