import React from 'react'
import {DiffuseStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByFundamentalAndDiffuse} from '../../../helpers/filterByNames';

const ATOMIC_NUMBERS_GROUP_METAL: (string|number)[] = [21,22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, '*', 72, 73, 74, 75, 76, 77, 78, 79, 80, '**', 104, 105, 106, 107, 108, 109, 110, 111, 112];

const Diffuse: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    // const diffuse = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_METALS} ); 
    const d = filterByFundamentalAndDiffuse( {data: data, numbers: ATOMIC_NUMBERS_GROUP_METAL} ); 

    return (
        <DiffuseStyles>
            
            {done && d?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        /> 
            )}

        </DiffuseStyles>
    )
}

export default Diffuse;
