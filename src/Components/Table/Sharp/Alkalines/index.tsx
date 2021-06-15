import React from 'react'
import {AlkalineStyles} from './styles'

import { IElements } from '../../../../Interfaces/IElements';

import useFetch from '../../../../hooks/useFetch';

import Element from '../../../Element';
import {filterByElements} from '../../../../helpers/filterByNames';

const ATOMIC_NUMBERS_GROUP_ALKALINE: number[] = [1, 3, 11, 19, 37, 55, 87];

const Alkaline: React.FC = () => {
    
    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const alkaline = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_ALKALINE} );
    
    return (
        <AlkalineStyles>
            
            {done && alkaline?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        /> 
            )}
        
        </AlkalineStyles>
    )
}

export default Alkaline;
