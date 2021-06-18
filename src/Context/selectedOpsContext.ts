import {createContext} from 'react';  

export interface AppContextInterface {
    standardState: string;
    setCurrentState: (currentState: string) => void;
}

export const sampleAppContext: AppContextInterface = {
    
    standardState: 'group-block',
    setCurrentState: () => {} 
};

export const AppCtx = createContext< AppContextInterface>(sampleAppContext);