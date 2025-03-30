//@flow

import React from "react";
import SingleResidence from "../model/SingleResidence";
import useDataSource from "../../hooks/useDataSource";
import { RESIDENCES_API_BASE_URL } from "../../commons/endpoints";
import type { Residence } from "../../commons/types";

const Residences = (): React.Node => {
  const residences: any = useDataSource(`${RESIDENCES_API_BASE_URL}/all`);
  return (
    <div className="container">
      <h3 className="center">Residences</h3>
      {residences.map((item: Residence) => (
        <SingleResidence key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Residences;
