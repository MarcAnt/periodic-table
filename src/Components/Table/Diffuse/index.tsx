import React from 'react'
import {DiffuseStyles} from './styles'

import { IElements } from '../../../Interfaces/IElements';
import useFetch from '../../../hooks/useFetch';

import Element from '../../Element';

import {filterByFundamentalAndDiffuse} from '../../../helpers/filterByNames';

import {ATOMIC_NUMBERS_GROUP_METALS} from '../../../helpers/atomicNumbers';
import { useLocalstorage } from 'hooks/useLocalStorage';

const Diffuse: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const diffuse = filterByFundamentalAndDiffuse( {data: data, numbers: ATOMIC_NUMBERS_GROUP_METALS} ); 
    const [state] = useLocalstorage('diffuse', diffuse);

    return (
        <DiffuseStyles>
            
            {state && done ? diffuse?.map(el => <Element 
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

        </DiffuseStyles>
    )
}

export default Diffuse;
