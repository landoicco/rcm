import { useRef } from "react";

const AddContacts = () => {
  // Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const submitContact = (e) => {
    e.preventDefault();

    let newContact = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    };

    // API POST request

    fetch("http://localhost:8080/api/contacts", {
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
      <form className="col s12" onSubmit={(e) => submitContact(e)}>
        <div className="row">
          <div className="input-field col s6">
            <input ref={firstNameRef} type="text" className="validate" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input ref={lastNameRef} type="text" className="validate" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input ref={emailRef} type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <button
            className="waves-effect waves-light btn"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContacts;
