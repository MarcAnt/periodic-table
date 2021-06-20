import React from 'react'

import { TableWrapper} from './styles'
import InfoElement from './InfoElement'
import Sharp from './Sharp'
import Diffuse from './Diffuse'
import Principal from './Principal'
import Fundamental from './Fundamental'
import NobleGases from './NobleGases'

import { IElements } from '../../Interfaces/IElements';
import useFetch from '../../hooks/useFetch';

const Table: React.FC = () => {
    
    const {done} = useFetch<IElements[]>('https://neelpatel05.pythonanywhere.com') 
 
    return (
        <>
            {
                done ? 
                <TableWrapper>
                    <InfoElement />
                    <Sharp />
                    <Diffuse />
                    <Principal /> 
                    <NobleGases />
                    <Fundamental />
                </TableWrapper>
                : 
                null
            }
                
        </>
    )
}

export default Table
