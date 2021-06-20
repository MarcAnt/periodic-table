import {useState, useEffect, useContext}  from 'react';

import Select from 'react-select'

import { InfoElementStyles, InfoWrapper, SelectBox } from './styles';

import { AppCtx } from 'Context/selectedOpsContext';
import { LangCtx } from 'Context/langContext';
import {elementInfoLang, placeHolderSelect} from '../../../Lang/es';

import {filterByElements} from  '../.././../helpers/filterByNames'
import Element from '../../Element';
import { IElements} from '../../../Interfaces/IElements';
import useFetch from '../../../hooks/useFetch'

import {Loader} from 'Components/Loader';


const options = [
    { value: 'group-block', label: 'Chemical Group Block' },
    { value: 'standard-state', label: 'Standard State' }
]

const options_es = [
    { value: 'group-block', label: 'Grupo de bloque quimico' },
    { value: 'standard-state', label: 'Estado Estandard' }
]

function changeLangOptionsOnSelect(lang:string, newOptions: object[]) {

    if (lang === 'es') {
        return newOptions;    
    }else {
        return options;
    }
}

const InfoElement: React.FC = () => {
    
    const {lang} = useContext(LangCtx);

    const [state, setState] = useState<string>('')
    const {setCurrentState} = useContext(AppCtx);
    
    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const h = filterByElements( {data: data, numbers: [1]} ); 

    const handleChange = (e: any):void => {
        setState(e.value)
    }
    
    useEffect(() => {
        setCurrentState(state)
    }, [state, setCurrentState])

    return (
        <InfoWrapper >
            
            <InfoElementStyles>
                <div className="info-element">
                    {done ? h?.map(el => <Element 
                                            key={el.name} 
                                            name={el.name} 
                                            atomicNumber={el.atomicNumber} 
                                            symbol={el.symbol} 
                                            groupBlock={el.group} 
                                            bgColor={el.bgColor} 
                                            standardStateElement={el.elementState}
                                            /> 
                    ) : <Loader />}
                    
                </div>
                <div className="info-card">
                    <p>{ (lang === 'es') ? elementInfoLang.atomicNumber : 'Atomic Number'}</p>
                    <h1>{ (lang === 'es') ? elementInfoLang.symbol : 'Symbol'}</h1>
                    <p>{ (lang === 'es') ? elementInfoLang.name : 'Name'}</p>

                    <small> { 
                        (state === 'group-block' || state === '' )  
                        ? (lang === 'es') ? 
                        elementInfoLang.chemGroup : 'Chemical Group Block' : (lang === 'es') 
                        ? elementInfoLang.standardState : 'Standard State'
                        }  
                    </small>
                </div>
            </InfoElementStyles>

            <SelectBox>
                <Select onChange={handleChange} placeholder={(lang === 'es') ? placeHolderSelect.placeholder : 'Select Property'} options={changeLangOptionsOnSelect(lang, options_es)}  />
            </SelectBox>
        
        </InfoWrapper>
    )
}

export default InfoElement;
