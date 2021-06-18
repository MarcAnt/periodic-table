import PeriodicTable from './Components/PeriodicTable'

import { LangCtx } from 'Context/langContext';
import { useChangeLang } from 'hooks/changeLang';

import { AppCtx } from 'Context/selectedOpsContext';
import { useStateElement } from 'hooks/stateElement';

function App() {
  //Context for standard state
  const state = useStateElement();

  //Context for changing the lang to es
  const lang = useChangeLang();
  
  return (
    <LangCtx.Provider value={lang}>
      <AppCtx.Provider value={state}>
          <PeriodicTable /> 
      </AppCtx.Provider>
    </LangCtx.Provider>
  );
}

export default App;
