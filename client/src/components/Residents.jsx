import SingleResident from "./SingleResident";
import useResidents from "../hooks/useResidents";

const Residents = () => {
  const residents = useResidents();
  return residents.map((item) => <SingleResident key={item.id} item={item} />);
};

export default Residents;
