import React from 'react'

import { TableWrapper} from './styles'

//Components

import InfoElement from './InfoElement';
import Sharp from './Sharp';
import Diffuse from './Diffuse';
import Principal from './Principal';
import Fundamental from './Fundamental';
import NobleGases from './NobleGases';


const Table: React.FC = () => {
    
    return (
        <TableWrapper>
            <InfoElement />
            <Sharp />
            <Diffuse />
            <Principal /> 
            <NobleGases />
            <Fundamental />
        </TableWrapper>
      
    )
}

export default Table
