import React from 'react'
import {AlkalineEarthStyles} from './styles'

import { IElements } from '../../../../Interfaces/IElements';

import useFetch from '../../../../hooks/useFetch';

import Element from '../../../Element';
import {filterByElements} from '../../../../helpers/filterByNames';

const ATOMIC_NUMBERS_GROUP_ALKALINE_EARTH: number[] = [4, 12, 20, 38, 56, 88];


const AlkalineEarths: React.FC = () => {
    
    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const alkaline = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_ALKALINE_EARTH} );
    
    return (
        <AlkalineEarthStyles>
            {/* { done && data?.map( el =>  <Element key={el.name} name={el.name} symbol={el.symbol} atomicNumber={el.atomicNumber} groupBlock={el.groupBlock} />  )  } */}
            {done && alkaline?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} /> 
            )}
        
        </AlkalineEarthStyles>
    )
}

export default AlkalineEarths;