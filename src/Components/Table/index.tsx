import React from 'react'
import Sharp from './Sharp'
import Diffuse from './Diffuse'
import Principal from './Principal'
import Fundamental from './Fundamental'
import NobleGases from './NobleGases'
import { TableWrapper } from './styles'



const Table: React.FC = () => {
    return (
        <TableWrapper>
            <Sharp />
            <Diffuse />
            <Principal /> 
            <Fundamental />
            <NobleGases />
        </TableWrapper>
    )
}

export default Table
