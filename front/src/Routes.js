import { Routes as ReactRouters, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function Routes() {
  return (
    <BrowserRouter>
      <ReactRouters>
        <Route path="/" element={<Home />} />
        <Route path="/:search" element={<Search />} />
      </ReactRouters>
    </BrowserRouter>
  );
}

export default Routes;
