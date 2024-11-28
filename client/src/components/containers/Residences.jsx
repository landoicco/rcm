import SingleResidence from "../model/SingleResidence";
import useDataSource from "../../hooks/useDataSource";
import { RESIDENCES_API_BASE_URL } from "../../commons/endpoints";

const Residences = () => {
  const residences = useDataSource(`${RESIDENCES_API_BASE_URL}/all`);
  return (
    <div className="container">
      <h3 className="center">Residences</h3>
      {residences.map((item) => (
        <SingleResidence key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Residences;
