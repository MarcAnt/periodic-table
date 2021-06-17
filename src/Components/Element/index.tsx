import React, {useContext} from 'react'
import { SingleElement } from './styles'

import { AppCtx } from 'helpers/selectedOpsContext';
import { LangCtx } from 'Context/langContext';

import useFetchLang from '../../hooks/useFetchLang'
import { ILangEs } from 'Interfaces/IElements';
import { filterElementsByLang } from 'helpers/filterByLang';


interface IElement {
    name: string;
    symbol: string;
    atomicNumber: number;
    groupBlock: string;
    bgColor: string;
    standardStateElement: string; 
}


function controlSmallText(
    standarStateContext: string, 
    standardStateElement: string, 
    groupBlock: string, 
    atomicNumber: number,
    lang: string, 
    elLang: ILangEs | undefined
    ) {

    if(lang === 'es') {

        if (standarStateContext === '' || standarStateContext === 'group-block') {
            return elLang?.groupBlock
        }else {
            return elLang?.standardState
        }

    }else {
        //if lang is undefined or en
        //default context value group-block or ''
        
        if (standarStateContext === '' || standarStateContext === 'group-block') {
            return groupBlock
        }else {
    
            //if context value is standard-state
    
            if(atomicNumber === 0) return ''
            if(atomicNumber >= 100 && atomicNumber <= 109) return 'Solid'
            if(atomicNumber === 118) return 'Gas (Expected)'
            if(standardStateElement === '') return 'Solid (Expected)'
            return standardStateElement
        }
    }

    
}

const Element: React.FC<IElement> = ({name, symbol, atomicNumber, groupBlock, bgColor, standardStateElement}) => {
    
    const {lang} = useContext(LangCtx);
    const {dataLang} = useFetchLang<ILangEs[]>('elements_es.json');
    const elLang = filterElementsByLang({data: dataLang, number: atomicNumber})
 
    //Context: group-block
    const {standardState} = useContext(AppCtx);

    return (

        <SingleElement bgColor={bgColor} groupBlock={groupBlock} standardStateElement={standardStateElement} selectState={standardState} atomicNumber={atomicNumber}>
            
            <p>{ atomicNumber === 0 ? '' : atomicNumber }</p>
            <h1>{symbol}</h1>
            <p>{ ( name === '*' || name === '**' ) ? '' :  lang === "es" ? elLang?.name : name}</p>
            <small>{ controlSmallText(standardState, standardStateElement, groupBlock, atomicNumber,lang, elLang) }</small>
            {/* <small>{  lang === "es" ? elLang?.groupBlock :  groupBlock }</small> */}
            
        </SingleElement>
        
    )
}

export default Element;
