import React from 'react'
import {NobleGasesStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByElements} from '../../../helpers/filterByNames';

// const ATOMIC_NUMBERS_GROUP_NOBLEGASES: number[] = [2,10,18,36,54,86,118];
import {ATOMIC_NUMBERS_GROUP_NOBLEGASES} from '../../../helpers/atomicNumbers';


const NobleGases: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const noblegases = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_NOBLEGASES} );

    return (
        <NobleGasesStyles>
            {done && noblegases?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        /> 
            )}
        </NobleGasesStyles>
    )
}

export default NobleGases;
