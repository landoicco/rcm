//@flow

import { useEffect, useState } from "react";

const useCatImageUrl = (): string => {
  const catImageApiURL = "https://api.thecatapi.com/v1/images/search";

  const [url, setUrl] = useState("");

  // Get object with image url
  useEffect(() => {
    (async () => {
      const apiResponseRaw = await fetch(catImageApiURL);
      const apiResponse = await apiResponseRaw.json();

      const [data] = apiResponse;
      setUrl(data.url);
    })();
  }, []);

  return url;
};

export default useCatImageUrl;
