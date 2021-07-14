import useFetchElements from "hooks/useFetchElements";
import React from "react";
import { FundamentalStyles } from "./styles";

import Element from "../../Element";

import { ATOMIC_NUMBERS_GROUP_FUNDAMENTAL } from "../../../helpers/atomicNumbers";

const Fundamental: React.FC = () => {
  const { state: fundamental } = useFetchElements(
    ATOMIC_NUMBERS_GROUP_FUNDAMENTAL,
    "fundamental"
  );

  return (
    <FundamentalStyles>
      {fundamental?.map((el) => (
        <Element
          key={el.name}
          name={el.name}
          atomicNumber={el.atomicNumber}
          symbol={el.symbol}
          groupBlock={el.groupBlock}
          standardState={el.standardState}
        />
      ))}
    </FundamentalStyles>
  );
};

export default Fundamental;
