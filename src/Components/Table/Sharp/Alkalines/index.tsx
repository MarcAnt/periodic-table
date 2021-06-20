import React from 'react'
import {AlkalineStyles} from './styles'

import { IElements } from '../../../../Interfaces/IElements';

import useFetch from '../../../../hooks/useFetch';

import Element from '../../../Element';
import {filterByElements} from '../../../../helpers/filterByNames';

import {ATOMIC_NUMBERS_GROUP_ALKALINE} from '../../../../helpers/atomicNumbers';

import {useLocalstorage} from '../../../../hooks/useLocalStorage';

const Alkaline: React.FC = () => {
    
    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const alkaline = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_ALKALINE} );
    const [state] = useLocalstorage('alkaline', alkaline);

    return (
        <AlkalineStyles>
            
            {state && 
                done ? alkaline?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        /> )
                    :
                    state?.map(el => <Element 
                        key={el.name} 
                        name={el.name} 
                        atomicNumber={el.atomicNumber} 
                        symbol={el.symbol} 
                        groupBlock={el.group} 
                        bgColor={el.bgColor} 
                        standardStateElement={el.elementState}
                        /> )
            }
        
        </AlkalineStyles>
    )
}

export default Alkaline;
