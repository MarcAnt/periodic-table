import { useEffect, useState } from "react";
import API from "API";
import { isPersistedState } from "helpers/getLocalStorage";

export type ElementInfoType = {
  atomicNumber: number;
  groupBlock: string;
  name: string;
  standardState: string;
  symbol: string;
};

const useFetchElements = (
  atomicNumbers: (number | string)[],
  sessionName: string
) => {
  const [state, setState] = useState<ElementInfoType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        let elementsFiltered: ElementInfoType[] = [];

        setLoading(true);
        setError(false);
        const elements = await API.fetchElement();

        atomicNumbers
          .map((item) => {
            return item;
          })
          .filter((an) => {
            if (an === "*")
              elementsFiltered.push({
                name: "*",
                symbol: "*",
                atomicNumber: 0,
                groupBlock: "",
                standardState: "",
              });
            if (an === "**")
              elementsFiltered.push({
                name: "**",
                symbol: "**",
                atomicNumber: 0,
                groupBlock: "",
                standardState: "",
              });

            return elements.map((el) => {
              if (el.atomicNumber === an) {
                elementsFiltered.push({
                  name: el.name,
                  symbol: el.symbol,
                  atomicNumber: el.atomicNumber,
                  groupBlock: el.groupBlock,
                  standardState: el.standardState,
                });
              }

              return elementsFiltered;
            });
          });

        setState(elementsFiltered);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(sessionName);
    //lo lee si existe una sesion creada
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
    }

    fetchElements();
  }, [atomicNumbers, sessionName]);

  //write the sessionStorage
  useEffect(() => {
    sessionStorage.setItem(sessionName, JSON.stringify(state));
  }, [state, atomicNumbers, sessionName]);

  return { state, loading, error };
};

export default useFetchElements;
