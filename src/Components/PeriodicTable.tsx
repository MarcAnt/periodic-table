import React from "react";
import Header from "./Header";
import Table from "./Table";

import { GlobalStyles } from "../Styles/GlobalStyles";

const PeriodicTable: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Table />
    </div>
  );
};

export default PeriodicTable;
