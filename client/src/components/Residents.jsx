import { useSearchParams } from "react-router-dom";

import SingleResident from "./SingleResident";
import useDataSource from "../hooks/useDataSource";

const AllResidents = () => {
  const residentsUrl = "http://localhost:8080/api/residents";
  const residents = useDataSource(residentsUrl);

  return <Residents residents={residents} />;
};

const ResidentSearchResult = () => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get("input");
  const residents = useDataSource(
    `http://localhost:8080/api/residents/firstName/${userInput}`
  );

  return <Residents residents={residents} />;
};

const Residents = ({ residents }) => {
  return (
    <div className="container">
      <h3 className="center">Residents</h3>
      {residents.map((item) => (
        <SingleResident key={item.id} item={item} />
      ))}
    </div>
  );
};

export { AllResidents, ResidentSearchResult };
