import React from 'react'
import {HeaderStyles} from './styles'
import { FaTwitter } from "react-icons/fa";


const Header: React.FC = () => {
    return (
        <HeaderStyles>
        
            <h1>Periodic Tables of the Elements</h1>
            <a href="https://twitter.com/bymarcant" target="_blank" rel="noreferrer"> <FaTwitter /> </a>
            
            <p> -- Inspired by <a href="https://pubchem.ncbi.nlm.nih.gov/periodic-table/#view=table&property=GroupBlock" target="_blank" rel="noreferrer" >PUBCHEM</a> </p>

        </HeaderStyles>
    )
}

export default Header;
