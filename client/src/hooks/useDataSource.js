import { useEffect, useState } from "react";

const useDataSource = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [url]);

  return data;
};

export default useDataSource;
