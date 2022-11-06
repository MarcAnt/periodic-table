import React from "react";
import { NobleGasesStyles } from "./styles";

import Element from "../../Element";

import { ATOMIC_NUMBERS_GROUP_NOBLEGASES } from "../../../helpers/atomicNumbers";
import useFetchElements from "../../../hooks/useFetchElements";

const NobleGases: React.FC = () => {
  const { state: noblegases } = useFetchElements(
    ATOMIC_NUMBERS_GROUP_NOBLEGASES,
    "noblegases"
  );

  return (
    <NobleGasesStyles>
      {noblegases?.map((el) => (
        <Element
          key={el.name}
          name={el.name}
          atomicNumber={el.atomicNumber}
          symbol={el.symbol}
          groupBlock={el.groupBlock}
          standardState={el.standardState}
        />
      ))}
    </NobleGasesStyles>
  );
};

export default NobleGases;
