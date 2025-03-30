//@flow

import React from "react";
import useCatImageUrl from "../../hooks/useCatImageUrl";
import type { DataItem } from "../../commons/types";

const SinglePet = ({ item }: DataItem): React.Node => {
  const catImageUrl = useCatImageUrl();
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="row">
            <div className="card-image col s4">
              <img
                src={catImageUrl}
                style={{ width: "200px", height: "200px" }}
                alt="cat or dog"
              />
            </div>
            <div className="card-content col offset-s1 s7">
              <p>
                This is a simple description of the pet in question **TODO**
              </p>
              <p style={{ marginTop: "50px" }}>
                <b style={{ color: "#2B874C" }}>Address:</b> {item.address}
              </p>
            </div>
          </div>
          <div className="card-action">
            <p href="/">
              This is a {item.type} named{" "}
              <b style={{ color: "#2B874C" }}>{item.name}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePet;
