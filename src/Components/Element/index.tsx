import React from 'react'
import { SingleElement } from './styles'

interface IElement {
    name: string;
    symbol: string;
    atomicNumber: number;
    groupBlock: string;
    bgColor: string;
}

const Element: React.FC<IElement> = ({name, symbol, atomicNumber, groupBlock, bgColor}) => {
    return (
        <SingleElement bgColor={bgColor}>
            
            <p>{atomicNumber}</p>
            <h1>{symbol}</h1>
            <p>{name}</p>
            <small>{groupBlock}</small>
            
        </SingleElement>
    )
}

export default Element;
