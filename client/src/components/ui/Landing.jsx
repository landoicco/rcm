import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResidentFinder from "../forms/ResidentFinder";
import AddResident from "../forms/AddResident";
import { AllResidents, ResidentSearchResult } from "../containers/Residents";

const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResidentFinder />} />
        <Route path="/add" element={<AddResident />} />
        <Route path="/residents" element={<AllResidents />} />
        <Route path="/resident" element={<ResidentSearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
