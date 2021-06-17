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

// if(atomicNumber >= 110 && atomicNumber <= 118) return 'whitesmoke'
// if(atomicNumber === 9) return '#D52092'
// if(atomicNumber === 68) return '#00CCD5'
// return `#${bgColor}`

const selectedStateBgColor = (standardStateElement: string, selectedState: string, bgColor: string | number, atomicNumber: number, groupBlock: string) => { 
    
    if(selectedState === '' || selectedState === 'group-block' ) {
        if(groupBlock === 'post-transition metal') return colorBlock['metal']
        return colorBlock[groupBlock]
    }else {
       if(atomicNumber >= 100 && atomicNumber <= 117) return colorState.solid
       if(atomicNumber === 118) return colorState.gas
       return colorState[standardStateElement]
    }

};


export const SingleElement = styled.div<IBgColor>`

    color:  ${props => (props.atomicNumber !== 0) ? 'black' : 'whitesmoke'};
    border-radius: 10px;
    width: 80px;
    background-color: ${ props => selectedStateBgColor(props.standardStateElement, props.selectState, props.bgColor, props.atomicNumber, props.groupBlock) };

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