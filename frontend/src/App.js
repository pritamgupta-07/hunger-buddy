import Home from "./components/Home";
import Search from "./components//search";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/Pagenotfound";
import Restaurant from "./components/Resturant";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:meal_id/:meal_type_name" element={<Search />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
