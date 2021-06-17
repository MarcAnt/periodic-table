import {createContext} from 'react';  

export interface LangContextInterface {
    lang: string;
    setCurrentLang: (currentLang: string) => void;
}

export const LangValueContext: LangContextInterface = {
    
    lang: 'es',
    setCurrentLang: () => {} 
};

export const LangCtx = createContext< LangContextInterface>(LangValueContext);