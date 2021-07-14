import React from "react";

//Components
import PeriodicTable from "./Components/PeriodicTable";

//Context
import Provider from "./Context/selectedOpsContext";
import { LangProvider } from "Context/langContext";

const App: React.FC = () => {
  return (
    <LangProvider>
      <Provider>
        <PeriodicTable />
      </Provider>
    </LangProvider>
  );
};

export default App;
