import { useEffect, useState } from "react";
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

  return residents.map((item) => <SingleResident key={item.id} item={item} />);
};

export default Residents;
