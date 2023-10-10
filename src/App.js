import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/movie/:imdbId" element={<MovieDetail/>} />
          <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
