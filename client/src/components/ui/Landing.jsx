import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResidentFinder from "../forms/ResidentFinder";
import AddResident from "../forms/AddResident";
import AddPet from "../forms/AddPet";
import Pets from "../containers/Pets";
import AddResidence from "../forms/AddResidence";
import { AllResidents, ResidentSearchResult } from "../containers/Residents";
import Residences from "../containers/Residences";

const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResidentFinder />} />
        <Route path="/resident/add" element={<AddResident />} />
        <Route path="/resident/all" element={<AllResidents />} />
        <Route path="/resident" element={<ResidentSearchResult />} />
        <Route path="/residence/all" element={<Residences />} />
        <Route path="/residence/add" element={<AddResidence />} />
        <Route path="/pet/add" element={<AddPet />} />
        <Route path="/pet/all" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
