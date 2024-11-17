import { useRef } from "react";

const AddResident = () => {
  // Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const addressRef = useRef();

  const submitContact = (e) => {
    e.preventDefault();

    let newContact = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      address: addressRef.current.value,
    };

    // API POST request

    fetch("http://localhost:8080/api/residents", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newContact),
    }).then((response) => response.json());

    window.location.reload();
  };

  return (
    <div className="row">
      <h3 className="center">Add new resident to database</h3>
      <form className="col s12" onSubmit={(e) => submitContact(e)}>
        <div className="row">
          <div className="input-field col s6">
            <input
              ref={firstNameRef}
              type="text"
              className="validate"
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              ref={lastNameRef}
              type="text"
              className="validate"
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input ref={emailRef} type="email" className="validate" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input
              ref={phoneNumberRef}
              type="number"
              className="validate"
              required
            />
            <label htmlFor="phoneNumber">Phone number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input ref={addressRef} type="text" className="validate" required />
            <label htmlFor="email">Address</label>
          </div>
        </div>
        <div className="row center">
          <button
            className="btn-large waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddResident;
