import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResidentFinder from "./ResidentFinder";
import AddResident from "./AddResident";
import Residents from "./Residents";

const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResidentFinder />} />
        <Route path="/add" element={<AddResident />} />
        <Route path="/residents" element={<Residents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
