import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const ResidentFinder = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  return (
    <div className="container center">
      <h3>Find resident</h3>
      <form>
        <input
          type="text"
          placeholder="Search by name or address"
          ref={inputRef}
          onChange={() => setInput(inputRef.current.value)}
        />
        <Link to={`/resident?input=${input}`}>
          <button className="btn teal lighten-1" type="submit">
            Search
            <i className="material-icons right">search</i>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ResidentFinder;
