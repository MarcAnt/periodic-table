import React from 'react'
import {AlkalineEarthStyles} from './styles'

import { IElements } from '../../../../Interfaces/IElements';

import useFetch from '../../../../hooks/useFetch';

import Element from '../../../Element';
import {filterByElements} from '../../../../helpers/filterByNames';

import {useLocalstorage} from '../../../../hooks/useLocalStorage';

import {ATOMIC_NUMBERS_GROUP_ALKALINE_EARTH} from '../../../../helpers/atomicNumbers';


const AlkalineEarths: React.FC = () => {

    const {done, data} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
    const alkalineEarth = filterByElements( {data: data, numbers: ATOMIC_NUMBERS_GROUP_ALKALINE_EARTH} );        
    const [state] = useLocalstorage('alkaline-earth', alkalineEarth);
  
    return (
        <AlkalineEarthStyles>
            { 
                state && 
                    done ?
                    alkalineEarth?.map(el => <Element 
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
        
        </AlkalineEarthStyles>
    )
}

export default AlkalineEarths;