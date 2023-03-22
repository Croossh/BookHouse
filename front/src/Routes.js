import { Routes as ReactRouters, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <ReactRouters>
        <Route path="/" element={<Home />} />
      </ReactRouters>
    </BrowserRouter>
  );
}

export default Routes;
