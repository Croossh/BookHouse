import { Routes as ReactRouters, Route, BrowserRouter } from "react-router-dom";
import Header from "./features/Header";
import { SearchInput } from "./features/SearchInput";
import Home from "./pages/Home";
import Search from "./pages/Search";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <SearchInput />
      <ReactRouters>
        <Route path="/" element={<Home />} />
        <Route path="/:search" element={<Search />} />
      </ReactRouters>
    </BrowserRouter>
  );
}

export default Routes;
