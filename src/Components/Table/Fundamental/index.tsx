import React from 'react'
import {FundamentalStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByFundamentalAndDiffuse} from '../../../helpers/filterByNames';

const ATOMIC_NUMBERS_GROUP_FUNDAMENTAL: (string|number)[] = ['*', 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 
'**', 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];

const Fundamental: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    // const diffuse = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_METALS} ); 
    const d = filterByFundamentalAndDiffuse( {data: data, numbers: ATOMIC_NUMBERS_GROUP_FUNDAMENTAL} ); 

    return (
        <FundamentalStyles>
            
            {done && d?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} /> 
            )}

        </FundamentalStyles>
    )
}

export default Fundamental;