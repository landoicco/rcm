//@flow

import React, { createRef } from "react";

import { PETS_API_BASE_URL } from "../../commons/endpoints";

const AddPet = (): React.Node => {
  const nameRef = createRef<HTMLInputElement>();
  const typeRef = createRef<HTMLInputElement>();
  const addressRef = createRef<HTMLInputElement>();

  const submitPet = (e: MouseEvent) => {
    e.preventDefault();

    const newPet = {
      name: nameRef.current?.value,
      type: typeRef.current?.value,
    };

    // Get address from user input
    const [street, extNumber] = addressRef.current?.value.split(" ") ?? [
      "",
      "",
    ];

    // API POST request
    fetch(`${PETS_API_BASE_URL}/add/${street}/${extNumber}`, {
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
      <h3 className="center">Add new pet</h3>
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
        <div className="row">
          <div className="input-field col s12">
            <input ref={addressRef} type="text" className="validate" required />
            <label htmlFor="name">Address</label>
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
