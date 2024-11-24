import { useRef } from "react";

import { PETS_API_BASE_URL } from "../../commons/endpoints";

const AddPet = () => {
  const nameRef = useRef();
  const typeRef = useRef();

  const submitPet = (e) => {
    e.preventDefault();

    const newPet = {
      name: nameRef.current.value,
      type: typeRef.current.value,
    };

    // API POST request
    fetch(`${PETS_API_BASE_URL}/add/3`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPet),
    }).then((response) => response.json());

    window.location.reload();
  };

  return (
    <div className="container">
      <h3 className="center">Add new pet to </h3>
      <form onSubmit={(e) => submitPet(e)}>
        <div className="row">
          <div className="input-field col s10">
            <input ref={nameRef} type="text" className="validate" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s2">
            <input ref={typeRef} type="text" className="validate" required />
            <label htmlFor="type">Type</label>
          </div>
        </div>
        <div className="row center">
          <button
            className="btn-large waves-effect waves-light teal lighten-1"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">pets</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPet;
