import PeriodicTable from './Components/PeriodicTable'

import { LangCtx } from 'Context/langContext';
import { useChangeLang } from 'hooks/changeLang';

import { AppCtx } from 'helpers/selectedOpsContext';
import { useStateElement } from 'hooks/stateElement';



function App() {

  const state = useStateElement();
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
