
import styled from "styled-components";
import {selectedStateBgColor} from '../../Components/Element/styles';

interface IBgColor {
    bgColor: string | number;
    standardStateElement: string; //solid, gas, liquid
    selectState: string; //standard-state || normal group
    atomicNumber: number;
    groupBlock: string; //metalloid, noble gas
};

export const modalWrapper: object = {
    display: 'flex',
    justifyContent:'center', 
    alignItems:'center', 
    position: 'fixed', 
    width: '100vw', 
    height: '100vh', 
    top: 0, 
    left: 0
} 

export const modalOverlay: object = {backgroundColor: 'black', opacity: .6, width: '100vw', height:'100vh', position: 'fixed'};
export const modalContent: object = { display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'whitesmoke', width: '50%', height: '50%', position: 'fixed', borderRadius: '10px'}
export const buttonClose: object = {   
    color: 'black',
    fontSize: '1.5rem', 
    position: 'absolute', 
    right: '1rem', 
    top: '1rem', 
    backgroundColor: 'transparent', 
    border: 'none',
    cursor: 'pointer'
    
}  

export const SingleElementModal = styled.div<IBgColor>`
    
    font-family: 'Inconsolata', sans-serif;
    color:  ${props => (props.atomicNumber !== 0) ? 'black' : 'whitesmoke'};
    border-radius: 10px;
    border: none;
    width: 50%;
    height: 80%;
    background-color: ${ props => selectedStateBgColor(props.standardStateElement, props.selectState, props.atomicNumber, props.groupBlock) };
    text-align: center;
    padding: 1rem;
    margin-left: 1rem;
    box-shadow:  ${props => (props.bgColor !== '0c1222') ? '1px 2px 5px lightgrey' : '' };
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
        font-size: 2.5rem;
        padding: 1rem;
    }

    h1 {
        font-size: 4.5rem;
        padding: 1rem;
    }
    small {
        font-size: 1rem;
        padding: .5rem;
    }

    
`; 
export const InfoSingleElementModal = styled.div`
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
        font-size: 2.5rem;
        padding: 1rem;
    }

    h1 {
        font-size: 4.5rem;
        padding: 1rem;
    }
    small {
        font-size: 1rem;
        padding: .5rem;
    }
`;