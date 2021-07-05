import React from 'react'
import {AlkalineStyles} from './styles'

import Element from '../../../Element';

import {ATOMIC_NUMBERS_GROUP_ALKALINE} from '../../../../helpers/atomicNumbers';


import useFetchElements from 'hooks/useFetchElements';

const Alkaline: React.FC = () => {
   
    const {state: alkaline} = useFetchElements(ATOMIC_NUMBERS_GROUP_ALKALINE, 'alkaline');

    return (
        <AlkalineStyles>
                {
                alkaline?.map(el => <Element 
                                        key={el.name} 
                                        name={el.name} 
                                        atomicNumber={el.atomicNumber} 
                                        symbol={el.symbol} 
                                        groupBlock={el.groupBlock} 
                                        standardState={el.standardState}
                                        /> )
            
                }
           
        
        </AlkalineStyles>
    )
}

export default Alkaline;
