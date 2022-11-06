import React from "react";
import { AlkalineEarthStyles } from "./styles";

import Element from "../../../Element";

import { ATOMIC_NUMBERS_GROUP_ALKALINE_EARTH } from "../../../../helpers/atomicNumbers";
import useFetchElements from "../../../../hooks/useFetchElements";

const AlkalineEarths: React.FC = () => {
  const { state: alkalineEarth } = useFetchElements(
    ATOMIC_NUMBERS_GROUP_ALKALINE_EARTH,
    "alkalineEarth"
  );
  return (
    <AlkalineEarthStyles>
      {alkalineEarth?.map((el) => (
        <Element
          key={el.name}
          name={el.name}
          atomicNumber={el.atomicNumber}
          symbol={el.symbol}
          groupBlock={el.groupBlock}
          standardState={el.standardState}
        />
      ))}
    </AlkalineEarthStyles>
  );
};

export default AlkalineEarths;
