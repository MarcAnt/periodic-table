import styled from "styled-components";

interface IBgColor {
    bgColor: string | number;
    // symbol: string;
};

  
export const SingleElement = styled.div<IBgColor>`

    color: ${ props => ( props.bgColor === '' || props.bgColor === '0c1222' || props.bgColor === '0c1222' ) ? 'whitesmoke' : 'black' };
    border-radius: 10px;
    width: 80px;
    background-color: #${ props => ( props.bgColor === '' ) ? '20232c' : props.bgColor === 9e+51 ? 'D52092': props.bgColor === 0 ? '00CCD5' : props.bgColor };
    text-align: center;
    padding: .15rem 0;
    box-shadow:  ${props => (props.bgColor !== '0c1222') ? '1px 2px 5px black' : '' };
    cursor: pointer;
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