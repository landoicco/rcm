import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResidentFinder from "../forms/ResidentFinder";
import AddResident from "../forms/AddResident";
import AddPet from "../forms/AddPet";
import { AllResidents, ResidentSearchResult } from "../containers/Residents";
import Residences from "../containers/Residences";

const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResidentFinder />} />
        <Route path="/add" element={<AddResident />} />
        <Route path="/residents" element={<AllResidents />} />
        <Route path="/resident" element={<ResidentSearchResult />} />
        <Route path="/residences" element={<Residences />} />
        <Route path="/pet/add" element={<AddPet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
