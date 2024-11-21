import { useSearchParams } from "react-router-dom";

import SingleResident from "../model/SingleResident";
import useDataSource from "../../hooks/useDataSource";

const RESIDENTS_API_BASE_URL = "http://localhost:8080/api/residents";

const AllResidents = () => {
  const residents = useDataSource(RESIDENTS_API_BASE_URL);

  return <Residents residents={residents} />;
};

const ResidentSearchResult = () => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get("input");
  const userInputArr = userInput.split(" ");
  const residents = [];

  // Search for first name, last name and residence
  residents.push(
    ...useDataSource(`${RESIDENTS_API_BASE_URL}/firstName/${userInput}`)
  );
  residents.push(
    ...useDataSource(`${RESIDENTS_API_BASE_URL}/lastName/${userInput}`)
  );
  residents.push(
    ...useDataSource(`${RESIDENTS_API_BASE_URL}/residence/${userInput}`)
  );
  residents.push(
    ...useDataSource(
      `${RESIDENTS_API_BASE_URL}/residence/${userInputArr[0]}/${userInputArr[1]}`
    )
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
