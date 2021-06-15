import { AppCtx } from 'helpers/selectedOpsContext';
import React, {useContext} from 'react'
import { SingleElement } from './styles'

interface IElement {
    name: string;
    symbol: string;
    atomicNumber: number;
    groupBlock: string;
    bgColor: string;
    standardStateElement: string; 
}

function controlSmallText(standarStateContext: string, standardStateElement: string, groupBlock: string, atomicNumber: number) {
    console.log(standardStateElement);
    
    if (standarStateContext === '' || standarStateContext === 'group-block') {
        return groupBlock
    }else {

        if(atomicNumber === 0) return ''
        if(atomicNumber >= 100 && atomicNumber <= 109) return 'Solid'
        if(atomicNumber === 118) return 'Gas (Expected)'
        if(standardStateElement === '') return 'Solid (Expected)'
        return standardStateElement
    }
    
}

const Element: React.FC<IElement> = ({name, symbol, atomicNumber, groupBlock, bgColor, standardStateElement}) => {
    
    const {standardState} = useContext(AppCtx);

    return (

        <SingleElement bgColor={bgColor} standardStateElement={standardStateElement} selectState={standardState} atomicNumber={atomicNumber}>
            
            <p>{ atomicNumber === 0 ? '' : atomicNumber }</p>
            <h1>{symbol}</h1>
            <p>{ ( name === '*' || name === '**' ) ? '' : name}</p>
            <small>{ controlSmallText(standardState, standardStateElement, groupBlock, atomicNumber) }</small>
            
        </SingleElement>
        
    )
}

export default Element;
