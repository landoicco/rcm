import SingleResidence from "../model/SingleResidence";
import useDataSource from "../../hooks/useDataSource";

const RESIDENCES_API_BASE_URL = "http://localhost:8080/api/residences";

const Residences = () => {
  const residences = useDataSource(RESIDENCES_API_BASE_URL);
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
