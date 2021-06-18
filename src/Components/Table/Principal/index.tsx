import React from 'react'
import {PrincipalStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByElements} from '../../../helpers/filterByNames';

// const ATOMIC_NUMBERS_GROUP_NOMETALS: number[] = [5,6,7,8,9,13,14,15,16,17,31,32,33,34,35,49,50,51,52,53,81,82,83,84,85,113,114,115,116,117];
import {ATOMIC_NUMBERS_GROUP_NONMETALS} from '../../../helpers/atomicNumbers';

const Principal: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const nometal = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_NONMETALS} );

    return (
        <PrincipalStyles>
            {done && nometal?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        /> 
            )}
        </PrincipalStyles>
    )
}

export default Principal;
