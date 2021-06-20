import React from 'react'
import {NobleGasesStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByElements} from '../../../helpers/filterByNames';

import {ATOMIC_NUMBERS_GROUP_NOBLEGASES} from '../../../helpers/atomicNumbers';
import { useLocalstorage } from 'hooks/useLocalStorage';


const NobleGases: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const noblegases = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_NOBLEGASES} );
    const [state] = useLocalstorage('noble-gases', noblegases);

    return (
        <NobleGasesStyles>
            {state && 
                    done ? noblegases?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        />)

                    : state?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        />)
            }
        </NobleGasesStyles>
    )
}

export default NobleGases;
