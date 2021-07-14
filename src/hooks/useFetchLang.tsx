import { useEffect, useState } from "react";

function useFetchLang<Payload>(url: string): { dataLang: Payload | null } {
  const [dataLang, setDataLang] = useState<Payload | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res: Payload) => {
        setDataLang(res);
      });
  }, [url]);

  return { dataLang };
}

export default useFetchLang;
