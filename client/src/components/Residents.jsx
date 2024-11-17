import { useEffect, useState } from "react";
import AddResident from "./AddResident";
import SingleResident from "./SingleResident";

const Residents = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    (async () => {
      const apiResult = await fetch("http://localhost:8080/api/residents");
      const jsonAPIResult = await apiResult.json();
      setResidents(jsonAPIResult);
    })();
  }, []);

  return residents ? (
    <div>
      <div className="row">
        <h3>Add new resident</h3>
        <AddResident />
      </div>
      <div className="row">
        {residents.map((item) => (
          <SingleResident key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <h3>No data loaded</h3>
  );
};

export default Residents;
