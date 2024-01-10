import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./component/MyNav";
import TvShow from "./component/TvShow";
import MovieDetails from "./component/MovieDetails";

import MyNavtwo from "./component/MyNavtwo";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <MyNav
          image="https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png"
          link1="Home"
          link2="Movies"
          link3="TvShow"
          link4="Recently Added"
          link5="MyList"
          link7="KIDS"
          link8="MyList"
        />
        <MyNavtwo />

        <Routes>
          <Route path="/details/:idmovie" element={<MovieDetails />} />
          <Route path="/movie" element={<TvShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
