import { useSearchParams } from "react-router-dom";

import SingleResident from "./SingleResident";
import useResidents from "../hooks/useResidents";

const Residents = () => {
  const residents = useResidents();
  const [queryParams] = useSearchParams();

  console.log("Seacrhing for: ", queryParams.get("input"));

  return (
    <div className="container">
      <h3 className="center">Residents</h3>
      {residents.map((item) => (
        <SingleResident key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Residents;
