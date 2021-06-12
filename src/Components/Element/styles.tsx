import styled from "styled-components";

interface IBgColor {
    bgColor: string;
};

  
export const SingleElement = styled.div<IBgColor>`

    color: whitesmoke;
    margin: 1px;
    border-radius: 10px;
    width: 100px;
    background-color: #${props => props.bgColor};
    text-align: center;
    padding: .15rem 0;

    small {
        font-size: .45rem;
    }

    
` 