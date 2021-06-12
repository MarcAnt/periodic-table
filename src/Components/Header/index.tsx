import React from 'react'
import {HeaderStyles} from './styles'
import { FaTwitter } from "react-icons/fa";


const Header: React.FC = () => {
    return (
        <HeaderStyles>
        
            <h1>Periodic Tables of the Elements</h1>
            <a href="https://twitter.com/bymarcant" rel="noreferrer"> <FaTwitter /> </a>
        
        </HeaderStyles>
    )
}

export default Header;
