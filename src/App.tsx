import PeriodicTable from "@Components/PeriodicTable";
import { Provider } from "@Context/selectedOpsContext";
import React from "react";

//Components

import { LangProvider } from "./Context/langContext";

//Context

const App = () => {
  return (
    <LangProvider>
      <Provider>
        <PeriodicTable />
      </Provider>
    </LangProvider>
  );
};

export default App;
