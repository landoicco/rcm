import { useRef } from "react";
import { RESIDENCES_API_BASE_URL } from "../../commons/endpoints";

const AddResidence = () => {
  const streetRef = useRef();
  const extNumberRef = useRef();

  const submitResidence = (e) => {
    e.preventDefault();
    const newResidence = {
      street: streetRef.current.value,
      extNumber: extNumberRef.current.value,
    };

    // API POST request
    fetch(`${RESIDENCES_API_BASE_URL}/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newResidence),
    }).then((response) => response.json());

    window.location.reload();
  };

  return (
    <div className="container">
      <h3 className="center">Add new residence</h3>
      <form onSubmit={(e) => submitResidence(e)}>
        <div className="row">
          <div className="input-field col s10">
            <input ref={streetRef} type="text" className="validate" required />
            <label htmlFor="name">Street Name</label>
          </div>
          <div className="input-field col s2">
            <input
              ref={extNumberRef}
              type="number"
              className="validate"
              required
            />
            <label htmlFor="type">Exterior Number</label>
          </div>
        </div>
        <div className="row center">
          <button
            className="btn-large waves-effect waves-light teal lighten-1"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">home</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddResidence;
