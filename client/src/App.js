import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Map from "./pages/Map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="survey" element={<Survey />}></Route>
          <Route path="map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
