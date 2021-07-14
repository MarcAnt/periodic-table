import useFetchElements from "hooks/useFetchElements";
import React from "react";
import { DiffuseStyles } from "./styles";

import Element from "../../Element";

import { ATOMIC_NUMBERS_GROUP_METALS } from "../../../helpers/atomicNumbers";

const Diffuse: React.FC = () => {
  const { state: diffuse } = useFetchElements(
    ATOMIC_NUMBERS_GROUP_METALS,
    "diffuse"
  );

  return (
    <DiffuseStyles>
      {diffuse?.map((el) => (
        <Element
          key={el.name}
          name={el.name}
          atomicNumber={el.atomicNumber}
          symbol={el.symbol}
          groupBlock={el.groupBlock}
          standardState={el.standardState}
        />
      ))}
    </DiffuseStyles>
  );
};

export default Diffuse;
