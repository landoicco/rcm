//@flow

import React from "react";
import { useSearchParams } from "react-router-dom";

import SingleResident from "../model/SingleResident";
import useDataSource from "../../hooks/useDataSource";
import { RESIDENTS_API_BASE_URL } from "../../commons/endpoints";
import type { Resident, ResidentsType } from "../../commons/types";

const AllResidents = (): React.Node => {
  const residents: any = useDataSource(`${RESIDENTS_API_BASE_URL}/all`);

  return <Residents residents={residents} />;
};

const ResidentSearchResult = (): React.Node => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get("input");
  const userInputArr = userInput.split(" ");
  const residents: any = [];

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

const Residents = ({ residents }: ResidentsType): React.Node => {
  return (
    <div className="container">
      <h3 className="center">Residents</h3>
      {residents.map((item: Resident) => (
        <SingleResident key={item.id} item={item} />
      ))}
    </div>
  );
};

export { AllResidents, ResidentSearchResult };
