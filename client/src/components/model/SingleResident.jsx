//@flow

import React from "react";
import type { ResidentType } from "../../commons/types";

const SingleResident = ({ item }: ResidentType): React.Node => {
  return (
    <div>
      <div className="card teal lighten-4">
        <div className="card-content">
          <span className="card-title">
            {item.firstName} {item.lastName}
          </span>
        </div>
        <div className="card-action">
          <p>Address: {item.address}</p>
          <p>Phone number: {item.phoneNumber}</p>
          <p>Email: {item.email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleResident;
