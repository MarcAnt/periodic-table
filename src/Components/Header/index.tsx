import React, {useState, useContext, useEffect  } from 'react'
import {HeaderStyles} from './styles'
import { FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { LangCtx } from 'Context/langContext';


const Header: React.FC = () => {

    const [lang, setLang] = useState<string>('');
    const {setCurrentLang} = useContext(LangCtx);
    
    const handleClick = (lang: string ): void => {
        setLang(lang);
    }
    useEffect( () => {
        setCurrentLang(lang)
    }, [lang, setCurrentLang])

    return (
        <HeaderStyles>
        
            <h1>Periodic Tables of the Elements</h1>
           
            <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} > 
                <button onClick={ () => handleClick('en') }> EN </button> <BiWorld/> <button onClick={ () => handleClick('es')}> ES </button> 
            </span>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a style={{paddingRight: '1rem'}} href='https://twitter.com/bymarcant' target="_blank" rel="noopener noreferrer"> <FaTwitter /> </a> 
                <p> | Inspired by <a href="https://pubchem.ncbi.nlm.nih.gov/periodic-table/#view=table&property=GroupBlock" target="_blank" rel="noreferrer" >PUBCHEM</a> </p>
            </div>

        </HeaderStyles>
    )
}

export default Header;
