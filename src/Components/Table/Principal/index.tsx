import React from "react";
import { PrincipalStyles } from "./styles";

import Element from "../../Element";

import { ATOMIC_NUMBERS_GROUP_NONMETALS } from "../../../helpers/atomicNumbers";
import useFetchElements from "../../../hooks/useFetchElements";

const Principal: React.FC = () => {
  const { state: principal } = useFetchElements(
    ATOMIC_NUMBERS_GROUP_NONMETALS,
    "principal"
  );

  return (
    <PrincipalStyles>
      {principal?.map((el) => (
        <Element
          key={el.name}
          name={el.name}
          atomicNumber={el.atomicNumber}
          symbol={el.symbol}
          groupBlock={el.groupBlock}
          standardState={el.standardState}
        />
      ))}
    </PrincipalStyles>
  );
};

export default Principal;
