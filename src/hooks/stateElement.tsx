import {useState, useCallback} from 'react'
import {AppContextInterface} from 'Context/selectedOpsContext';

export const useStateElement = (): AppContextInterface => {

    const [standardState, setStandardState] = useState('group-block');

    const setCurrentState = useCallback((currentState: string): void => {
        setStandardState(currentState)
    }, [])

    return {standardState, setCurrentState}

}