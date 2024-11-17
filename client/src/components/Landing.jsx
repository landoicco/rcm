import Residents from "./Residents";
import AddResident from "./AddResident";

const Landing = () => {
  return (
    <div>
      <div className="row">
        <h3 className="center">Add new resident</h3>
        <AddResident />
      </div>
      <div className="row">
        <h3 className="center">List of residents</h3>
        <Residents />
      </div>
    </div>
  );
};

export default Landing;
