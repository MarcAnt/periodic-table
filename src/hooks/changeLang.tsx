import {useState, useCallback} from 'react'
import {LangContextInterface} from 'Context/langContext';

export const useChangeLang = (): LangContextInterface => {

    const [lang, setStandardState] = useState('es');

    const setCurrentLang = useCallback((currentState: string): void => {
        setStandardState(currentState)
    }, [])

    return {lang, setCurrentLang}

}