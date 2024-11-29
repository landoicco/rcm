//@flow

import { Link } from "react-router-dom";
import React, { useState, createRef } from "react";

const ResidentFinder = (): React.Node => {
  const [input, setInput] = useState("");
  const inputRef = createRef<HTMLInputElement>();

  return (
    <div className="container center">
      <h3>Find resident</h3>
      <form>
        <input
          type="text"
          placeholder="Search by name or address"
          ref={inputRef}
          onChange={() => {
            if (inputRef.current === null) {
              return;
            }
            setInput(inputRef.current.value);
          }}
        />
        <Link to={`/resident?input=${input}`}>
          <button
            className="btn-large teal lighten-1"
            style={{ marginTop: "20px" }}
            type="submit"
          >
            Search
            <i className="material-icons right">search</i>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ResidentFinder;
