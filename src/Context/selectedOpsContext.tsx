import {createContext, useState} from 'react'

export type ColorState = {
    color: string;
    setColor: (c: string) => void;
}

export const contextValue: ColorState = {
    color: 'group-block',
    setColor: () => {} 
};

export const Context = createContext<ColorState>(contextValue);


const Provider = ( {children}:{children: JSX.Element} ) => {

    const [color, setColor] = useState('group-block');

    return (
        <Context.Provider value={ {color, setColor} } > 
            {children} 
        </Context.Provider>
    )
};
export default Provider;

