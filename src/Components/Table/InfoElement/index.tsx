import {useState, useEffect, useContext}  from 'react';

import { InfoElementStyles, InfoWrapper, SelectBox } from './styles';
import Select from 'react-select'

import { AppCtx } from 'helpers/selectedOpsContext';
import { LangCtx } from 'Context/langContext';

import {filterByElements} from  '../.././../helpers/filterByNames'
import Element from '../../Element';
import { IElements} from '../../../Interfaces/IElements';
import useFetch from '../../../hooks/useFetch'

import {elementInfoLang} from '../../../Lang/es'


const options = [
    { value: 'group-block', label: 'Chemical Grop Block' },
    { value: 'standard-state', label: 'Standard State' }
]

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
                    {done && h?.map(el => <Element 
                                            key={el.name} 
                                            name={el.name} 
                                            atomicNumber={el.atomicNumber} 
                                            symbol={el.symbol} 
                                            groupBlock={el.group} 
                                            bgColor={el.bgColor} 
                                            standardStateElement={el.elementState}
                                            /> 
                    )}
                    
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
                <Select onChange={handleChange} options={options}  />
            </SelectBox>
        
        </InfoWrapper>
    )
}

export default InfoElement;
