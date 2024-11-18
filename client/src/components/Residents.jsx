import { useSearchParams } from "react-router-dom";

import SingleResident from "./SingleResident";
import useDataSource from "../hooks/useDataSource";

const RESIDENTS_API_BASE_URL = "http://localhost:8080/api/residents";

const AllResidents = () => {
  const residents = useDataSource(RESIDENTS_API_BASE_URL);

  return <Residents residents={residents} />;
};

const ResidentSearchResult = () => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get("input");
  const residents = [];

  // Search for first name, last name and address
  residents.push(
    ...useDataSource(`${RESIDENTS_API_BASE_URL}/firstName/${userInput}`)
  );
  residents.push(
    ...useDataSource(`${RESIDENTS_API_BASE_URL}/lastName/${userInput}`)
  );
  residents.push(
    ...useDataSource(`${RESIDENTS_API_BASE_URL}/address/${userInput}`)
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
