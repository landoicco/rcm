//@flow

import React from "react";
import useDataSource from "../../hooks/useDataSource";
import { PETS_API_BASE_URL } from "../../commons/endpoints";
import type { Pet } from "../../commons/types";
import SinglePet from "../model/SinglePet";

const Pets = (): React.Node => {
  const pets: any = useDataSource(`${PETS_API_BASE_URL}/all`);
  return (
    <div className="container">
      <h3 className="center">Pets</h3>
      {pets.map((item: Pet) => (
        <SinglePet key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Pets;
