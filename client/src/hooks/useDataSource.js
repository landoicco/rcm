//@flow

import { useEffect, useState } from "react";
import type { RCMDataEntity } from "../commons/types";

const useDataSource = (url: string): RCMDataEntity => {
  const initialData: RCMDataEntity = [];
  const [data, setData] = useState(initialData);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [url]);

  return data;
};

export default useDataSource;
