import { AppCtx } from 'helpers/selectedOpsContext';
import React, {ReactNode, useContext} from 'react'
import { SingleElement } from './styles'

interface IElement {
    name: string;
    symbol: string;
    atomicNumber: number;
    groupBlock: string;
    bgColor: string;
    standardStateElement: string;
}

function controlSmallText(standarStateContext: string, standardStateElement: string) {
    // (standardState === 'standard-state' || standardState === '' ) ? standardStateElement === '' ? 'Expected Solid' : standardStateElement : groupBlock
    console.log(standarStateContext, standardStateElement);
    
    
}

const Element: React.FC<IElement> = ({name, symbol, atomicNumber, groupBlock, bgColor, standardStateElement}) => {
    
    const {standardState} = useContext(AppCtx);

    return (

        <SingleElement bgColor={bgColor} standardStateElement={standardStateElement} selectState={standardState}>
            
            <p>{ atomicNumber === 0 ? '' : atomicNumber }</p>
            <h1>{symbol}</h1>
            <p>{ ( name === '*' || name === '**' ) ? '' : name}</p>
            <small>{  }</small>
            {controlSmallText(standardState, standardStateElement)}
            
        </SingleElement>
        
    )
}

export default Element;
