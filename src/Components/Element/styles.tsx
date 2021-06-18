import styled from "styled-components";

interface IBgColor {
    bgColor: string | number;
    standardStateElement: string; //solid, gas, liquid
    selectState: string; //standard-state || normal group
    atomicNumber: number;
    groupBlock: string; //metalloid, noble gas
};


const colorState: any = {
    gas: '#BFFFFF',
    solid: '#F1F1F2',
    liquid: '#FFBFBF' 
}
//Only for * and ** 
const noColor: any = {
    color: 'transparent' 
}

const colorBlock: any = {
    nonmetal: '#FFFFC7',
    'alkali metal': '#FFC2C2',
    'alkaline earth metal': '#D3D3FF', 
    'transition metal': '#B8DBFF',
    metal: '#B9FFB9',
    metalloid: '#E0EEBA', //post-transition metal
    'noble gas': "#FFE2B7",
    halogen: '#FFFFB8',
    lanthanoid: '#ACFFFF',
    actinoid: '#C0FFEA'
}


const selectedStateBgColor = (standardStateElement: string, selectedState: string, atomicNumber: number, groupBlock: string) => { 
    
    //Only for * and ** 
    if(atomicNumber === 0) return noColor.color
    
    if(selectedState === '' || selectedState === 'group-block' ) {
        if(groupBlock === 'post-transition metal') return colorBlock['metal']
        return colorBlock[groupBlock]
    }else {
        if(atomicNumber >= 100 && atomicNumber <= 117) return colorState.solid
        if(atomicNumber === 118) return colorState.gas
        return colorState[standardStateElement]
    }
    
};


export const SingleElement = styled.button<IBgColor>`
    font-family: 'Inconsolata', sans-serif;
    color:  ${props => (props.atomicNumber !== 0) ? 'black' : 'whitesmoke'};
    border-radius: 10px;
    border: none;
    width: 80px;
    background-color: ${ props => selectedStateBgColor(props.standardStateElement, props.selectState, props.atomicNumber, props.groupBlock) };
    text-align: center;
    padding: .15rem 0;
    box-shadow:  ${props => (props.bgColor !== '0c1222') ? '1px 2px 5px black' : '' };
    cursor: ${ props => (props.atomicNumber > 0) ? 'pointer' : 'default' } ;
    transition: opacity .3s ease-in-out;

    p {
        font-size: .8rem;
    }

    h1 {
        font-size: 1.5rem;
    }
    small {
        font-size: .45rem;
    }

    :hover {
        opacity: .7;
    } 

    
` 
//Only for modal
export const SingleElementModal = styled.button<IBgColor>`
    
    font-family: 'Inconsolata', sans-serif;
    color:  ${props => (props.atomicNumber !== 0) ? 'black' : 'whitesmoke'};
    border-radius: 10px;
    border: none;
    width: 50%;
    background-color: ${ props => selectedStateBgColor(props.standardStateElement, props.selectState, props.atomicNumber, props.groupBlock) };
    text-align: center;
    padding: 2rem;
    box-shadow:  ${props => (props.bgColor !== '0c1222') ? '1px 2px 5px lightgrey' : '' };
    p {
        font-size: 3rem;
    }

    h1 {
        font-size: 5rem;
    }
    small {
        font-size: 2rem;
    }

    
` 