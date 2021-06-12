import React from 'react'
import Alkaline from './Alkalines'
import AlkalineEarths from './AlkalineEarths'
import {SharpStyles} from './styles'


const Sharp: React.FC = () => {
        
    return (
        <SharpStyles>
            <Alkaline />
            <AlkalineEarths />
        </SharpStyles>
    )
}

export default Sharp;
