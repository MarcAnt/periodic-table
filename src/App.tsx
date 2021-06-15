import PeriodicTable from './Components/PeriodicTable'

import { AppCtx } from 'helpers/selectedOpsContext';
import { useStateElement } from 'hooks/stateElement';


function App() {

  const state = useStateElement();
 
  return (
      <AppCtx.Provider value={state}>
          <PeriodicTable /> 
      </AppCtx.Provider>
  );
}

export default App;
