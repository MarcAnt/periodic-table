import React from 'react'
import {PrincipalStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByElements} from '../../../helpers/filterByNames';
import {useLocalstorage} from '../../../hooks/useLocalStorage';

import {ATOMIC_NUMBERS_GROUP_NONMETALS} from '../../../helpers/atomicNumbers';

const Principal: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const nonmetal = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_NONMETALS} );
    const [state] = useLocalstorage('nonmetal', nonmetal);

    return (
        <PrincipalStyles>
            {state && 
                    done ?
                    nonmetal?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        />)
                    :
                    state?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.group} 
                                        bgColor={el.bgColor} 
                                        standardStateElement={el.elementState}
                                        />)
                                    
            }
        </PrincipalStyles>
    )
}

export default Principal;
