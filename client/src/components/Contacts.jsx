import { useEffect, useState } from "react";
import AddContacts from "./AddContacts";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const apiResult = await fetch("http://localhost:8080/api/contacts");
      const jsonAPIResult = await apiResult.json();
      setContacts(jsonAPIResult);
    })();
  }, []);

  return contacts ? (
    <div>
      <div className="row">
        <h1>I'm contacts component</h1>
        <AddContacts />
      </div>
      <div className="row">
        {contacts.map((item) => (
          <SingleContact key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <h3>No data loaded</h3>
  );
};

export default Contacts;
