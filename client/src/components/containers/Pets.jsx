import useDataSource from "../../hooks/useDataSource";
import { PETS_API_BASE_URL } from "../../commons/endpoints";
import SinglePet from "../model/SinglePet";

const Pets = () => {
  const pets = useDataSource(`${PETS_API_BASE_URL}/all`);
  return (
    <div className="container">
      <h3 className="center">Pets</h3>
      {pets.map((item) => (
        <SinglePet key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Pets;
