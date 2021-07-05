import React, {useContext} from 'react'

//Styles
import {HeaderStyles} from './styles'

//Icons
import { FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

//Flags Images
import en from '../../images/united-kingdom.png';
import es from '../../images/spain.png';

//Lang
import {FormattedMessage} from 'react-intl';
import { langContext } from '../../Context/langContext';


const Header: React.FC = () => {
    
    const idioma = useContext(langContext);

    return (
        <HeaderStyles>
        
            <h1>
                <FormattedMessage id="app.title" defaultMessage="Periodic Table of the Elements"/>
            </h1>
           
            <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} > 
                <button onClick={ () => idioma.setLanguage('en') }> <img style={{width: '3rem'}} src={en} alt="english-flag" /> </button> 
                <BiWorld/> 
                <button onClick={ () => idioma.setLanguage('es')} > <img style={{width: '3rem'}} src={es} alt="spanish-flag" /> </button> 
            </span>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a style={{paddingRight: '1rem'}} href='https://twitter.com/bymarcant' target="_blank" rel="noopener noreferrer"> <FaTwitter /> </a> 
                <p> | <a href="https://pubchem.ncbi.nlm.nih.gov/periodic-table/#view=table&property=GroupBlock" target="_blank" rel="noreferrer" >PUBCHEM</a> </p>
            </div>

        </HeaderStyles>
    )
}

export default Header;
