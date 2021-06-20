import React from 'react'
import {FundamentalStyles} from './styles'
import { IElements } from '../../../Interfaces/IElements';

import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByFundamentalAndDiffuse} from '../../../helpers/filterByNames';

import {ATOMIC_NUMBERS_GROUP_FUNDAMENTAL} from '../../../helpers/atomicNumbers';
import { useLocalstorage } from 'hooks/useLocalStorage';


const Fundamental: React.FC = () => {
    
    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const fundamental = filterByFundamentalAndDiffuse( {data: data, numbers: ATOMIC_NUMBERS_GROUP_FUNDAMENTAL} ); 
    const [state] = useLocalstorage('fundamental', fundamental);

    return (
        <FundamentalStyles>
            
            {state &&
                done ?
                fundamental?.map(el => <Element 
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

        </FundamentalStyles>
    )
}

export default Fundamental;