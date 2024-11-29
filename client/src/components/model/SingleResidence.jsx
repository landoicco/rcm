//@flow

import React from "react";
import type { DataItem } from "../../commons/types";

const SingleResidence = ({ item }: DataItem): React.Node => {
  return (
    <div>
      <div className="card teal accent-4">
        <div className="card-content">
          <span className="card-title">
            {item.street} St., {item.extNumber}
          </span>
        </div>
        <div className="card-action">
          <p>Street: {item.street}</p>
          <p>Exterior number: {item.extNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleResidence;
