import styled from "styled-components";


export const InfoWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 50%;
    top: 0;
    transform: translateY(11rem);
`;

export const SelectBox = styled.div`
    width: 100%;
    margin-left: 1rem;
`

export const InfoElementStyles = styled.div`

    width: 100%;
    background-color: whitesmoke;
    display: flex;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 1px 2px 10px black;

    .info-element {
        
        button {
            padding: 1rem;
        }
    }

    .info-card {
        padding: 1rem;
    }

`