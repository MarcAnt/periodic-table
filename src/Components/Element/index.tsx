import React, {useContext, useState} from 'react'
import { SingleElement, SingleElementModal } from './styles'

import { AppCtx } from 'helpers/selectedOpsContext';
import { LangCtx } from 'Context/langContext';

import useFetchLang from '../../hooks/useFetchLang'
import { ILangEs } from 'Interfaces/IElements';
import { filterElementsByLang } from 'helpers/filterByLang';

import Modal from 'Components/Modal';
import { FaTimes } from 'react-icons/fa';


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
    
    const [showModal, setShowModal] = useState<boolean>(false);
    
    const {lang} = useContext(LangCtx);
    const {dataLang} = useFetchLang<ILangEs[]>('elements_es.json');
    const elLang = filterElementsByLang({data: dataLang, number: atomicNumber})
 
    //Context: group-block
    const {standardState} = useContext(AppCtx);

    return (
        <>
            <SingleElement 
                onClick={() => setShowModal(true)} 
                bgColor={bgColor} 
                groupBlock={groupBlock} 
                standardStateElement={standardStateElement} 
                selectState={standardState} 
                atomicNumber={atomicNumber}>
                
                <p>{ atomicNumber === 0 ? '' : atomicNumber }</p>
                <h1>{symbol}</h1>
                <p>{ ( name === '*' || name === '**' ) ? '' :  lang === "es" ? elLang?.name : name}</p>
                <small>{ controlSmallText(standardState, standardStateElement, groupBlock, atomicNumber,lang, elLang) }</small>
            
            </SingleElement>

            { showModal && name !== '*' && name !== '**' && 
                
                <Modal>
                    
                    <div style={{backgroundColor: 'black', opacity: .6, width: '100vw', height:'100vh', position: 'fixed'}} ></div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'whitesmoke', width: '50%', height: '50%', position: 'fixed', borderRadius: '10px'}} >
                        
                       
                        <SingleElementModal 
                            onClick={() => setShowModal(true)} 
                            bgColor={bgColor} 
                            groupBlock={groupBlock} 
                            standardStateElement={standardStateElement} 
                            selectState={standardState} 
                            atomicNumber={atomicNumber}>
                            
                            <p>{ atomicNumber === 0 ? '' : atomicNumber }</p>
                            <h1>{symbol}</h1>
                            <p>{ ( name === '*' || name === '**' ) ? '' :  lang === "es" ? elLang?.name : name}</p>
                            <small>{ controlSmallText(standardState, standardStateElement, groupBlock, atomicNumber,lang, elLang) }</small>
                        
                        </SingleElementModal>

                        <div style={{fontSize: '1.2rem', textAlign: 'center'}}>
                            <p style={{padding: '1.2rem 0'}}>Atomic Number</p>
                            <h1 style={{padding: '1.2rem 0'}}>Symbol</h1>
                            <p style={{padding: '1.2rem 0', fontSize: '3rem'}}>Name</p>
                            <small style={{padding: '1.2rem 0'}}>Chemical Group Block | Standard State</small>
                        </div>    
                        
                        
                        <button style={
                            {   
                                color: 'black',
                                fontSize: '2rem', 
                                position: 'absolute', 
                                right: '1rem', 
                                top: '1rem', 
                                backgroundColor: 'transparent', 
                                border: 'none',
                                cursor: 'pointer'
                                
                            }
                            } onClick={() => setShowModal(false)}> 

                            <FaTimes />
                        
                        </button>

                    </div>    
            

                </Modal> 
            }     
        </>
        
    )
}

export default Element;
