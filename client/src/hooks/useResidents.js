import { useState, useEffect } from "react";

const SERVER_API_URL = "http://localhost:8080/api/residents";

/**
 * Hook used for fetching data from server
 * @param reqBody Request body object for HTTP operations
 */
const useResidents = (reqBody) => {
  const [residentsData, setResidentsData] = useState([]);

  useEffect(() => {
    fetch(SERVER_API_URL, reqBody)
      .then((res) => res.json())
      .then((data) => setResidentsData(data));
  }, [reqBody]);

  return residentsData;
};

export default useResidents;
