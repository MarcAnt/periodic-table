import { IElements } from "../Interfaces/IElements";

export interface ISingleElement {
  name: string;
  symbol: string;
  atomicNumber: number;
  group: string;
  bgColor: string;
  elementState: string;
}

export function filterByElements({
  data,
  numbers,
}: {
  data: IElements[] | null;
  numbers: number[];
}) {
  const element: ISingleElement[] = [];

  numbers.forEach((number) => {
    data?.filter((el) => {
      if (el.atomicNumber === number)
        element.push({
          name: el.name,
          symbol: el.symbol,
          atomicNumber: el.atomicNumber,
          group: el.groupBlock,
          bgColor: el.cpkHexColor,
          elementState: el.standardState,
        });
      return element;
    });
  });

  return element;
}

export function filterByFundamentalAndDiffuse({
  data,
  numbers,
}: {
  data: IElements[] | null;
  numbers: (number | string)[];
}) {
  const element: ISingleElement[] = [];

  numbers.forEach((number) => {
    if (number === "*") {
      element.push({
        name: "*",
        symbol: "*",
        atomicNumber: 0,
        group: "",
        bgColor: "0c1222",
        elementState: "",
      });
    } else if (number === "**") {
      element.push({
        name: "**",
        symbol: "**",
        atomicNumber: 0,
        group: "",
        bgColor: "0c1222",
        elementState: "",
      });
    } else {
      data?.filter((el) => {
        if (el.atomicNumber === number)
          element.push({
            name: el.name,
            symbol: el.symbol,
            atomicNumber: el.atomicNumber,
            group: el.groupBlock,
            bgColor: el.cpkHexColor,
            elementState: el.standardState,
          });
        return element;
      });
    }
  });

  return element;
}
