import SingleResident from "./SingleResident";
import useResidents from "../hooks/useResidents";

const Residents = () => {
  const residents = useResidents();

  return (
    <div className="container">
      <h3 className="center">Residents list</h3>
      {residents.map((item) => (
        <SingleResident key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Residents;
